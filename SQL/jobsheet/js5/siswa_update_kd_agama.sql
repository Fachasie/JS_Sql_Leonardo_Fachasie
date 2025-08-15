use sekolah;

update siswa
set kd_agama = '1'
-- regexp = mencocokan pola teks menggunakan regular expression
where nama regexp '^[NSB]';

update siswa
set kd_agama = '4'
where nama regexp '^[DM]';

