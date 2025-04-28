-- CreateTable
CREATE TABLE "ReelRequest" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "instagramUrl" TEXT NOT NULL,
    "referenceUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReelRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImageDescription" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "reelRequestId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ImageDescription_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ImageDescription_reelRequestId_idx" ON "ImageDescription"("reelRequestId");

-- AddForeignKey
ALTER TABLE "ImageDescription" ADD CONSTRAINT "ImageDescription_reelRequestId_fkey" FOREIGN KEY ("reelRequestId") REFERENCES "ReelRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
