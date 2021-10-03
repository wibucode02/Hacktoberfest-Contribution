<?php
   /** 
   * Konversi Tannggal ke format : Hari, Tanggal Bulan Tahun
   * Input : DD-MM-YYYY
   * Bahasa Indonesia 
   */
   
   function konversi_tgl($date){
      $bulan   = array(
         'N/A',
         'Januari',
         'Februari',
         'Maret',
         'April',
         'Mei',
         'Juni',
         'Juli',
         'Agustus',
         'September',
         'Oktober',
         'Nopember',
         'Desember'
      );
   
      $hari = array(
         "Minggu",
         "Senin",
         "Selasa",
         "Rabu",
         "Kamis",
         "Jumat",
         "Sabtu",
      );

      $patern = '/([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})/';

      $text_hari = $hari[date('w', strtotime($date))];

      if(preg_match($patern, $date, $matches)){
         $year       = (int)$matches[1];
         $mon        = (int)$matches[2];
         $wDay       = str_pad((int)$matches[3], 2, 0, STR_PAD_LEFT);
         $bulan      = $bulan[$mon];

         $return     = $text_hari.', '.$wDay.' '.$bulan.' '.$year;
      }else{
        $return = $date;
      }

      return $return;
   }


   echo konversi_tgl("2021-10-01")."<br/>";
   echo konversi_tgl("2021-10-02")."<br/>";
   echo konversi_tgl("2021-10-03")."<br/>";
?>