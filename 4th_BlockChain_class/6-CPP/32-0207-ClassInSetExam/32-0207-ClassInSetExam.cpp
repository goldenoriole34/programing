#include <iostream>
#include <set>
#include <string>

using namespace std;

template <typename T, typename C>

void PrintSetElement(set<T, C>& s)
{
    for (const auto& ele : s)
    {
        cout << ele << " " << endl;
    }
}

class Todo
{
private:
    int priority;
    string jobDesc;

public:
    Todo(int nPriority, string strJobDesc)
     : priority(nPriority),
     jobDesc(strJobDesc)
     {
     }
#if 0
     bool operator<(const Todo& t) const
     {
         if (priority == t.priority)
         {
             return jobDesc < t.jobDesc;
         }
         return priority > t.priority;
     }
#endif

     friend class TodoCmp;

     friend ostream& operator<<(ostream& o, const Todo& td);
};

class TodoCmp
{
public:
    bool operator()(const Todo& t1, const Todo& t2) const
    {
        if (t1.priority == t2.priority)
        {
            return (t1.jobDesc < t2.jobDesc);
        }
        return (t1.priority > t2.priority);
    }
};

ostream& operator<<(ostream& o, const Todo& td)
{
    o << "[Priority : " << td.priority << "]" << td.jobDesc;
    return o;
}

int main()
{
    set<Todo, TodoCmp> todos;
    todos.insert(Todo(1, "excersies C++"));
    todos.insert(Todo(2, "excersies math"));
    todos.insert(Todo(1, "Programing Project"));
    todos.insert(Todo(3, "Meet friends"));
    todos.insert(Todo(2, "Watching Movie"));

    PrintSetElement(todos);

    cout << "======================" << endl;
    cout << "if you complete excersize math" << endl;
    todos.erase(todos.find(Todo(2, "excersies math")));

    PrintSetElement(todos);
    return 0;
}