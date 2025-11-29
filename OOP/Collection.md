# Collection

## List	
- List is an ordered collection in Java where:

  -  elements can be duplicated
  -  elements have index starting from 0
  -  order is maintained (insertion order)
-  ArrayList :	Resizable array that maintains order and allows duplicates
    -  Backed by dynamic array
    -  Fast for read, slow for insert/delete in middle
    -  ArrayList uses a dynamic array in the heap memory
    -  Stored in continuous memory blocks
    -  Indexing is O(1) because it does base_address + index * size
    -  Resizing uses Arrays.copyOf() to copy elements into a bigger array
      | Operation             | Complexity | Reason                    |
| --------------------- | ---------- | ------------------------- |
| **get(index)**        | O(1)       | direct array access       |
| **set(index)**        | O(1)       | direct access             |
| **add(value)**        | O(1)*      | amortized (except resize) |
| **add(index, value)** | O(n)       | shift elements right      |
| **remove(index)**     | O(n)       | shift elements left       |
| **contains()**        | O(n)       | linear scan               |
| **resize**            | O(n)       | array copy                |

-  LinkedList:	List with fast insert and remove operations
    - Backed by doubly linked list
    - Fast for insert/delete
    - Slow for index access
      | Operation         | Complexity | Reason                 |
| ----------------- | ---------- | ---------------------- |
| **add() at end**  | O(1)       | maintains tail pointer |
| **add(index)**    | O(n)       | must traverse to index |
| **get(index)**    | O(n)       | no continuous memory   |
| **remove(index)** | O(n)       | must traverse          |
| **remove(node)**  | O(1)       | pointer unlinking      |

- Vector

  -  Synchronized (thread safe)
  -  Slower
  -  Almost never used today

## Set	
-  HashSet:	Unordered collection of unique elements
-  TreeSet:	Sorted set of unique elements (natural order)
-  LinkedHashSet:	Maintains the order in which elements were inserted

## Map	
- Map is a collection used to store key–value pairs.
    - Each key is unique
    - A key maps to exactly one value
    - Values can be duplicated
    - Order depends on the Map implementation

-  HashMap:	Stores key/value pairs with no specific order
    -  Fastest average performance
    - Compute hash = key.hashCode()
2️  - Convert to index → index = hash % table.length
3️  - If bucket empty → insert Node
4️  - If bucket has nodes → check:
      - same hash?
      - same key? (equals())
    - Memory:
       - Table array is inside Heap
       - Nodes are objects stored in Heap
       - TreeNodes stored in Heap
       - HashMap grows automatically when load factor > 0.75
-  TreeMap:	Sorted map based on the natural order of keys
    - Implemented using Binary Heap
    - Stored in an array
    - Parent-child relationship based on index
-  LinkedHashMap:	Maintains the order in which keys were inserted
