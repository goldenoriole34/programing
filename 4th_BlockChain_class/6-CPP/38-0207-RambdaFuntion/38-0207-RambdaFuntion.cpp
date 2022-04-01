#include <iostream>  // std::cout
#include <algorithm>  // partial_sort, sort
#include <functional>  // greater 라는 함수를 사용하기 위해서 선언해준다.
#include <vector>  // vector is a container class that stores elements in a contiguous block of memory
#include <string> 

using namespace std;
template <typename T>
void PrintVector(T begin, T end)
{
    while (begin != end)
    {
        cout << "[" << *begin << "]";
        begin++;
    }
    cout << endl;
}


int main()
{
    vector<int> vec;
    vec.push_back(1);
    vec.push_back(2);
    vec.push_back(3);
    vec.push_back(4);
    vec.push_back(5);
    vec.push_back(7);
    vec.push_back(8);
    vec.push_back(9);


    cout << "initial status vector : " << endl;
    PrintVector(vec.begin(), vec.end());

    cout << "delete odd number in vector" << endl;
    vec.erase(remove_if(vec.begin(), vec.end(), 
        [](int i) -> bool {return i % 2 == 1;} // 람다함수
    ), vec.end()); // remove_if

    PrintVector(vec.begin(), vec.end());

    return 0;

    // 결과
    /*
        initial status vector : 
        [1][2][3][4][5][7][8][9]
        delete odd number in vector
        [2][4][8]
    */
}