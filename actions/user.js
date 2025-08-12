"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "../lib/prisma";
import { revalidatePath } from "next/cache";
import { generateAIInsights } from "./dashboard";

export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("No autorizado");

  const user = await db.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) throw new Error("Usuario no encontrado");

  try {
    const result = await db.$transaction(
      async (tx) => {
        let industryInsight = await tx.industryInsight.findUnique({
          where: { industry: data.industry },
        });

        if (!industryInsight) {
          const insights = await generateAIInsights(data.industry);

          industryInsight = await db.industryInsight.create({
            data: {
              industry: data.industry,
              ...insights,
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
          });
        }
        // actulizar el usuario
        const updateUser = await tx.user.update({
          where: { id: user.id },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });

        return { updateUser, industryInsight };
      },
      { timeout: 10000 }
    );

    revalidatePath("/"); // Cambia si quieres otra ruta
    return result.updateUser;
  } catch (error) {
    console.error("Error al actualizar usuario y industria:", error);
    throw new Error("Error al actualizar usuario y industria");
  }
}

// Función para revisar onboarding (igual que antes)
export async function getUserOnboardingStatus() {
  const { userId } = await auth();

  if (!userId) return { isOnboarded: false };

  try {
    const user = await db.user.findUnique({
      where: { clerkUserId: userId },
      select: { industry: true },
    });

    return { isOnboarded: !!user?.industry };
  } catch (error) {
    console.error("Error al revisar el estado de onboarding:", error);
    return { isOnboarded: false };
  }
}
