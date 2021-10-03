<?php
   function kekata($x) {
      $x = abs($x);
      $angka = array(
         "",
         "satu",
         "dua",
         "tiga",
         "empat",
         "lima",
         "enam",
         "tujuh",
         "delapan",
         "sembilan",
         "sepuluh",
         "sebelas"
      );
      $hasil = "";
      
      if($x < 12){
         $hasil = " " . $angka[$x];
      }elseif($x < 20){
         $hasil = kekata($x - 10) . " belas";
      }elseif($x < 100){
         $hasil = kekata($x / 10) . " puluh" . kekata($x % 10);
      }elseif($x < 200){
         $hasil = " seratus" . kekata($x - 100);
      }elseif($x < 1000){
         $hasil = kekata($x / 100) . " ratus" . kekata($x % 100);
      }elseif($x < 2000){
         $hasil = " seribu" . kekata($x - 1000);
      }elseif($x < 1000000){
         $hasil = kekata($x / 1000) . " ribu" . kekata($x % 1000);
      }elseif($x < 1000000000){
         $hasil = kekata($x / 1000000) . " juta" . kekata($x % 1000000);
      }elseif($x < 1000000000000){
         $hasil = kekata($x / 1000000000) . " milyar" . kekata(fmod($x, 1000000000));
      }elseif($x < 1000000000000000){
         $hasil = kekata($x / 1000000000000) . " trilyun" . kekata(fmod($x, 1000000000000));
      }
      
      return $hasil;
   }

   function Terbilang($x, $style = 4){
      
      if ($x < 0){
         $hasil = "minus " . trim(kekata($x));
      }else{
         $hasil = trim(kekata($x));
      }
      
      switch ($style) {
         case 1:
            $hasil = strtoupper($hasil);
         break;
         case 2:
            $hasil = strtolower($hasil);
         break;
         case 3:
            $hasil = ucwords($hasil);
         break;
         default:
            $hasil = ucfirst($hasil);
         break;
      }
      
      return $hasil;
   }

   echo Terbilang("2021")."<br/>";
   echo Terbilang("-2021");
?>