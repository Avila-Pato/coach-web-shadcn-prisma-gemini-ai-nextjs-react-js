"use server";


import { auth } from "@clerk/nextjs/server";
import { db } from "../lib/prisma";

export async function updateUser(data) {
  // Primero obtien el userId del usuario 
  const { userId } = await auth();
  // Si no encuentra el userId lanza un error "No autorizado"
  if (!userId) throw new Error("No autorizado");

  // verifica que existe en al base de datos
  const user = await db.user.findUnique({
    where: {
      clerkUserId: userId,
    },
  });

  // Si no lo encuentra lanza un error
  if (!user) throw new Error("Usuario no encontrado");

  // Transacción atómica con la base de datos
  try {
    const result = await db.$transaction(
      // tolo lo que pasa dentro se ejecuta como una transacción, si algo falla todo se deshace y lo revierte
      async (tx) => {
        // busca o crea industryInsighhts,
        let industryInsighhts = await tx.industryInsighhts.findUnique({
          where: {
            // Si ya existe data.industryInsighhtsId, lo usa
            id: data.industryInsighhtsId,
          },
        });
        // Si no, crea uno nuevo con valores por defecto y una fecha de nextUpdate a 7 días.
        if (!industryInsighhts) {
          industryInsighhts = await tx.industryInsighhts.create({
            data: {
              industry: data.industry,
              salaryRanges: [],
              growthRate: 0,
              demandLevel: "Medium",
              topSkills: [],
              marketOutlook: [],
              keyTrends: [],
              recommendedSkills: [],
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 dias
            },
          });
        }
        //Actualiza la industria, experiencia, biografía y habilidades. solo si la industria no existe en la
        // base de datos
        const updateUser = await tx.user.update({
          where: {
            id: user.id,
          },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });
        return { updateUser, industryInsighhts };
      },
      {
        timeout: 10000, //
      }
    );
  } catch (error) {
    console.log("Error al actualizar usuario y industria ", error.message);
    throw new Error("Error al actualizar usuario y industria");
  }
}

// Propósito:  Comprueba si el usuario ya pasó por el proceso de configuración inicial (tiene industria definida).
export async function getUserOnboardingStatus() {
  const { userId } = await auth();
  if (!userId) throw new Error("No autorizado");

  try {
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
      select: { industry: true },
    });

    if (!user) throw new Error("Usuario no encontrado");

    return { isOnboarded: !!user.industry };
  } catch (error) {
    console.log("Error al revisar el estado de onboarding", error.message);
    throw new Error("Error al revisar el estado de onboarding");
  }
}

