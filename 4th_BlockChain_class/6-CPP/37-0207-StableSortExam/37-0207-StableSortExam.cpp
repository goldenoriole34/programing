#include <iostream>
#include <vector>
#include <algorithm>
#include <functional>
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

class CUser
{

private:
    string m_name;
    int m_age;

public:
    CUser(string name, int age) : m_name(name), m_age(age) {}
    bool operator<(const CUser &u) const { return (m_age < u.m_age); }
    friend ostream &operator<<(ostream &o, const CUser &u);
};

ostream &operator<<(ostream &o, const CUser &u)
{
    o << u.m_name << ", " << u.m_age;
    return o;
}

int main()
{
    vector<CUser> vec;
    for (int i = 0; i < 100; i++)
    {
        string name = "";
        name.push_back('a' + i / 26);
        name.push_back('a' + i % 26);
        vec.push_back(CUser(name, static_cast<int>(rand() % 10)));
    }
    vector<CUser> vec2 = vec;

    cout << "Before sort" << endl;
    PrintVector(vec.begin(), vec.end());
    cout << "==================================================================" << endl;

    sort(vec.begin(), vec.end());

    cout << "After sort" << endl;
    PrintVector(vec.begin(), vec.end());
    cout << "==================================================================" << endl;

    cout << "stable sort" << endl;
    stable_sort(vec2.begin(), vec2.end());
    PrintVector(vec2.begin(), vec2.end());

    return 0;
}