import { prisma } from "@/db";

export async function getData(url: string) {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const renderDate = (date: Date) => {
  return (
    ("0" + date.getDate()).slice(-2) +
    "/" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "/" +
    date.getFullYear()
  );
};

export async function handleToggleBookmark(articleId: string, currentValue: boolean) {
  "use server";

  await prisma.article.upsert({
    where: { id: articleId },
    update: { isBookmarked: !currentValue },
    create: {
      id: articleId,
      isBookmarked: currentValue,
      isReadLater: false,
      note: "",
    },
  });
}
