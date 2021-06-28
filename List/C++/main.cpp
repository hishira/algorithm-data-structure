#include <iostream>
#include "linkedlist.cpp"

int main(){
	std::cout<<"Hello"<<"\n";
	LinkedList<int> list ;
	list.append(12);
	list.append(10);
	std::string c = list.print();
	std::cout<<c<<"\n";
	std::cout<<list.removeLast()<<"\n";
	c = list.print();
	std::cout<<c<<"\n";
	std::cout<<list.removeLast()<<"\n";
	c = list.print();
	std::cout<<c<<"\n";
}

