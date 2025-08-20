/*
Collection 클래스를 상속받아 
List 메소드들과 클래스 메소드 arrayToList, listToArray를 보유한 
ArrayList 클래스를 구현하시오. 
(assert로 Test코드도 작성)





*/

ArrayList.listToArray({ value: 1, rest: { value: 2 } }) ⇒ [1,2]
ArrayList.arrayToList([1,2]) ⇒ { value: 1, rest: { value: 2 } }

const alist = new ArrayList([1, 2]); // alist.toString() ⇒ { value: 1, rest: { value: 2 } }
alist.add(3);     // { value: 1, rest: { value: 2, rest: { value: 3 } } }
alist.add(5, 1);  // { value: 1, rest: { value: 5, rest: { value: 2, rest: { value: 3 } }}
alist.remove(2);  // { value: 1, rest: { value: 3 } }
alist.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3 } } }
alist.add(33, 1);
alist.print(); // ArrayList(4) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3 } } } }
alist.set(1, 300);  // { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3 } } } }
alist.get(2);  alist.size;  // 22, 4
alist.indexOf(300);  // 1
alist.contains(300); alist.contains(301);  // true, false
alist.isEmpty; alist.peek;  // false, 3
alist.toArray();  // [1, 300, 22, 3]
alist.iterator().next();  // { value: 1, done: false }
alist.clear();  // all clear
