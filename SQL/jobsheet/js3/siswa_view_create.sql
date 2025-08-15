use sekolah;

create view view_siswa as
	select nis as 'NIS SISWA', nama as 'Nama Siswa'
    from siswa;