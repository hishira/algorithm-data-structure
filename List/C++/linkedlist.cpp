#include <iostream>
#include <string>
template<typename T>
struct Node{
	public:
		T value;
		Node<T> *next;
		Node(T value){
			this->value = value;
			this->next = nullptr;
		}
};

template<class T>
class LinkedList{
	private:
		Node<T>* head = nullptr;
	public:
		LinkedList();
		void append(T value);
		bool removeLast();
		std::string print();
	
};
template<class T>
LinkedList<T>::LinkedList(){}

template<class T>
void  LinkedList<T>::append(T value){
	Node<T> *tmp = new Node<T>(value);
	if(this->head== nullptr){
		this->head = tmp;
		return;
	}
	Node<T> *headtmp = this->head;
	while(headtmp->next!= nullptr) headtmp = headtmp->next;
	headtmp->next = tmp;
		
};
template<class T>
bool LinkedList<T>::removeLast(){
	Node<T> *headtmp = this->head;
	if(headtmp == nullptr)	return false;
	if(headtmp->next == nullptr) {
		this->head = nullptr;
		return true;
	}
	while(headtmp->next->next != nullptr) headtmp = headtmp->next;
	headtmp->next = nullptr;
	return true;
}
template<class T>
std::string LinkedList<T>::print(){
	std::string s = "";
	Node<T> *headtmp = this->head;
	while(headtmp!= nullptr){
		s+=std::to_string(headtmp->value)+" ";
		headtmp = headtmp->next;
	}
	return s;
}




