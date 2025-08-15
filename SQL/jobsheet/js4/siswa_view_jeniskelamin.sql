use sekolah;

create view view_siswa_jeniskelamin as
	select nis,nama,
		if(mid(nis,7,1) = '1',
			'Laki', 'Perempuan') as Jenkel
	from siswa