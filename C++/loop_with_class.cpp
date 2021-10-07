#include <iostream>
#include <conio.h>

using namespace std;

class perulangan{
	public:
		perulangan() { n = 4; }
		void ulang_while(int n);
		void ulang_for(int);
		int ulang_rekursif(int);
	private:
		int n; 
};

void perulangan::ulang_for(int n) {
	for (int i = 1; i <=n; i++){
		cout << i << " ";
		getch();
	}
}

void perulangan::ulang_while(int n) {
	int i = 4;
	while (i >= n) {
		cout << i << " ";
		i--;
		getch(); 
	}
}

int perulangan::ulang_rekursif(int n){
	if(n == 4){
		getch();
		cout << n;
		return 4;
	}else{
		getch();
		cout << n << " ";
		return ulang_rekursif(n+1);
	}
}

int main() {
	perulangan X;
	cout << "Menggunakan cara iteratif_for\n";
	X.ulang_for(4);
	cout << "\nMenggunakan cara iteratif_while\n";
	X.ulang_for(4);
	cout << "\nMenggunakan cara rekursif\n";
	X.ulang_rekursif(1);
	
	return 0;
}
