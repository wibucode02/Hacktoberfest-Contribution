#include <iostream>
using namespace std; 
int main() {
  float a, b, hasil; // float 
  char operatorz; // char

  cout << "Selamat Datang di Program Kalkulator Sederhana\n\n"; 
  cout << "Silahkan masukkan nilai pertama: "; 
  cin >> a; 
  cout << "\nPilih operator (+), (-), (*), (/): "; 
  cin >> operatorz; 
  cout << "\nKemudian masukkan nilai kedua: "; 
  cin >> b; 
  if(operatorz == '+'){
    hasil = a + b; 
  }

  else if(operatorz == '-'){
    hasil = a - b;
  }

  else if(operatorz == '*'){
    hasil = a * b; 
  }

  else if(operatorz == '/'){
    hasil = a / b; 
  }

  else {
    cout << "\nMaaf, permintaan tidak bisa diproses karena operator yang anda masukkan tidak sesuai! Silahkan coba lagi!" << endl;
    return 0; 
  }

  cout << "\nHasil Perhitungan: " << a <<  operatorz  << b << " = " <<  hasil << endl; 
  return 0; 
}
