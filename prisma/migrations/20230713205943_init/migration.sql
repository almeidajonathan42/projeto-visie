/*
  Warnings:

  - You are about to drop the column `articleId` on the `Article` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Article" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "isBookmarked" BOOLEAN NOT NULL,
    "isReadLater" BOOLEAN NOT NULL,
    "note" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiedAt" DATETIME NOT NULL
);
INSERT INTO "new_Article" ("createdAt", "id", "isBookmarked", "isReadLater", "modifiedAt", "note") SELECT "createdAt", "id", "isBookmarked", "isReadLater", "modifiedAt", "note" FROM "Article";
DROP TABLE "Article";
ALTER TABLE "new_Article" RENAME TO "Article";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
