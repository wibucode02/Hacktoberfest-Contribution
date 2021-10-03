#include<iostream>
using namespace std;

void
tower_of_hanoi (int n, char firstRod, char secondRod, char thirdRod)
{
  if (n == 1)
    {
      cout << "Move disk one form rod " << firstRod << " to rod " << secondRod
	<< endl;
      return;
    }
  tower_of_hanoi (n - 1, firstRod, thirdRod, secondRod);
  cout << "Move disk " << firstRod << " to rod " << secondRod << endl;
  tower_of_hanoi (n - 1, thirdRod, secondRod, firstRod);
}


int
main ()
{
  int n = 6;
  tower_of_hanoi (n, 'A', 'b', 'c');
  return 0;

}
