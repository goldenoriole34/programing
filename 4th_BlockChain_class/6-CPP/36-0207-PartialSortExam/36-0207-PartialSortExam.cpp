#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

template <typename T>
void PrintVector(T begin, T end)
{
    while (begin != end)
    {
        cout <<  *begin << " ";
        begin++; 
    }
    cout << endl;
    
}

int main()
{
    vector<int> vec;
    vec.push_back(5);
    vec.push_back(2);
    vec.push_back(3);
    vec.push_back(1);
    vec.push_back(4);
    vec.push_back(8);
    vec.push_back(6);
    vec.push_back(7);
    cout << "Before sorting\n";
    PrintVector(vec.begin(), vec.end());

    partial_sort(vec.begin(), vec.begin() + 3, vec.end());
    cout << "After sorting\n";
    PrintVector(vec.begin(), vec.end());

    return 0;
}