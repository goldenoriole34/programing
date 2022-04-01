#include <iostream>
#include <set>

using namespace std;

template <typename T>
void PrintSetElement(set<T>& s)
{
    cout << "[";
    for(typename set<T>::iterator itr = s.begin(); itr != s.end(); ++itr)
    {
        cout << *itr << " ";
    }
    cout << "]\n";
}

int main()
{
    set<int> s;
    s.insert(10);
    s.insert(50);
    s.insert(20);
    s.insert(30);
    s.insert(40);

    cout << "Initial state set : sored print" << endl;
    PrintSetElement(s);

    cout << "20 is e element ? :: ";
    set<int>::iterator itr = s.find(20);
    if(itr != s.end())
    {
        cout << "Yes" << endl;
    }
    else
    {
        cout << "No" << endl;
    }

    cout << "25 is e element? :: ";
    itr = s.find(25);
    if(itr != s.end())
    {
        cout << "Yes" << endl;
    }
    else
    {
        cout << "No" << endl;
    }
    set<int> nSet;
    nSet.insert(10);
    nSet.insert(20);
    nSet.insert(10);
    nSet.insert(30);
    nSet.insert(20);
    nSet.insert(40);
    cout << "nSet : ";
    PrintSetElement(nSet);

    return 0;
}