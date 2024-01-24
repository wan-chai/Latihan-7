-- CreateTable
CREATE TABLE `pengguna` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `alamat` VARCHAR(255) NOT NULL,
    `daerah` VARCHAR(255) NOT NULL,
    `negeri` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `pengguna_nama_key`(`nama`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
