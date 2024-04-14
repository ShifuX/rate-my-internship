-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo_path" TEXT NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "review_count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Moderator" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Moderator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reviews" (
    "id" TEXT NOT NULL,
    "moderator_reviewed" BOOLEAN NOT NULL DEFAULT false,
    "total_rating" DECIMAL(65,30) NOT NULL,
    "learn_rating" DECIMAL(65,30) NOT NULL,
    "fun_rating" DECIMAL(65,30) NOT NULL,
    "challenge_rating" DECIMAL(65,30) NOT NULL,
    "pay" DECIMAL(65,30) NOT NULL,
    "review" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "would_retake" BOOLEAN NOT NULL,
    "pdf" BYTEA NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "companyID" TEXT NOT NULL,

    CONSTRAINT "Reviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyAddRequest" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "added" BOOLEAN NOT NULL DEFAULT false,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CompanyAddRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_name_key" ON "Company"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Moderator_username_key" ON "Moderator"("username");

-- CreateIndex
CREATE INDEX "Reviews_companyID_idx" ON "Reviews"("companyID");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyAddRequest_name_key" ON "CompanyAddRequest"("name");

-- AddForeignKey
ALTER TABLE "Reviews" ADD CONSTRAINT "Reviews_companyID_fkey" FOREIGN KEY ("companyID") REFERENCES "Company"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
