/*
  Warnings:

  - You are about to drop the column `name` on the `Post` table. All the data in the column will be lost.
  - Added the required column `title` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Post" ("createdAt", "id", "updatedAt") SELECT "createdAt", "id", "updatedAt" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE INDEX "Post_id_idx" ON "Post"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
