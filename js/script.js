// event pada saat link di klik
$('.page-scroll').on('clik', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap element yang bersangkutan
	var elementTujuan = $(tujuan);
	console.log(elementTujuan);

	$('body').scrollTop('700');

	e.preventDefault();


});