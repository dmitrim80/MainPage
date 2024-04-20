import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./bootstrap_page.css";
const Main = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const codeStringHeapSort = `#Heap Sort Algorithm

      def createHeap(data, length, index):

      largest = index
      left = 2 * index + 1
      right = 2 * index + 2

      if left < length and data[index] < data[left]:
      largest = left

      if right < length and data[largest] < data[right]:
      largest = right

      if largest != index:
      data[index], data[largest] = data[largest], data[index]
      createHeap(data, length, largest)

      def heapSort(data):
      length = len(data)

      #We build max heap
      for index in range(length, 0, -1):
      createHeap(data, length, index)

      for index in range(length -1, 0, -1):
      data[index], data[0] = data[0], data[index]

      createHeap(data, index, 0)

      print(data)`.trim();
  const codeStringMergeSort = `#Merge Sort Algorithm

      def mergeSort(data):
      """This function determines whether the list is broken
      into individual parts"""

      if len(data) < 2:
      return data

      middle = len(data)//2

      # We break the list in two parts
      left = mergeSort(data[:middle])
      right = mergeSort(data[middle:])

      # Merge the two sorted parts into a larger piece.

      print("The left side is: ", left)
      print("The right side is: ", right)

      merged = merge(left, right)

      print("Merged ", merged)
      return merged
      def merge(left, right):
      """When left side/right side is empty, 
      It means that this is an individual item and is already sorted."""

      #We make sure the right/left side is not empty
      #meaning that it's an individual item and it's already sorted.
      if not len(left):
      return left

      if not len(right):
      return right

      result = []
      leftIndex = 0
      rightIndex = 0
      totalLen = len(left) + len(right)

      #
      while (len(result) < totalLen):

      #Perform the required comparisons and merge the two parts

      if left[leftIndex] < right[rightIndex]:
      result.append(left[leftIndex])
      leftIndex += 1
      else:
      result.append(right[rightIndex])
      rightIndex += 1

      if leftIndex == len(left) or rightIndex == len(right):
      result.extend(left[leftIndex:] or right[rightIndex:])

      break

      return result`.trim();
  const codeStringQuickSort = `#Quick Sort Algorithm


  def quickSort(data, left, right):
      if right<= left:
          return 
      else:
          pivot = partition(data, left, right)
          quickSort(data, left, pivot - 1)
          quickSort(data, pivot + 1, right)
  
      return data
  
  def partition(data, left, right):
      """This function chooses a pivot point that dertermines the left and right side of the sort"""
      pivot = data[left]
      leftIndex = left + 1
      rightIndex = right
  
      while True:
          while leftIndex <= rightIndex and data[leftIndex] <= pivot:
              leftIndex += 1
          while rightIndex >= leftIndex and data[rightIndex] >= pivot:
              rightIndex -= 1
          if rightIndex <= leftIndex:
              break
          data[leftIndex], data[rightIndex] = data[rightIndex], data [leftIndex]
          print(data)
  
      data[left], data[rightIndex] = data[rightIndex], data[left]
      print(data)
  
      return rightIndex`.trim();
  const codeStringInsertionSort = `#Insertion Sort Algorithm

  def insertionSort(data):
  
      for scanIndex in range(1, len(data)):
          tmp = data[scanIndex]
  
          minIndex = scanIndex
  
          while minIndex > 0 and tmp < data[minIndex - 1]:
              data[minIndex] = data[minIndex - 1]
              minIndex -= 1
  
          data[minIndex] = tmp
  
          print(data)`.trim();

  const codeStringSelectionSort = `#Selection Sort Algorithm

  def selectionSort(data):
  
      for scanIndex in range(0, len(data)):
  
          minIndex = scanIndex
  
          for compIndex in range(scanIndex + 1, len(data)):
              if data[compIndex] < data[minIndex]:
                  minIndex = compIndex
  
          if minIndex != scanIndex:
              data[scanIndex], data[minIndex] = data[minIndex], data[scanIndex]
  
              print(data)`.trim();

  const codeStringBubbleSort = `#Bubble Sort Algorithm

  def bubbleSort(data):
      lenght = len(data)
  
      for iIndex in range(lenght):
          swapped = False
  
          for jIndex in range(0, lenght - iIndex - 1):
  
              if data[jIndex] > data[jIndex + 1]:
                  data[jIndex], data[jIndex + 1] = data[jIndex + 1], data[jIndex]
                  swapped = True
  
          if swapped == False:
              break
  
      print(data)`.trim();
  const codeStringShellSort = `
  #Shell Sort Algorithm

def shellSort(data, length):

    gap = length//2

    while gap > 0:
        for iIndex in range(gap, length):

            temp = data[iIndex]

            jIndex = iIndex

            while jIndex >= gap and data[jIndex - gap] > temp:
                data[jIndex] = data[jIndex - gap]

                jIndex -= gap

            data[jIndex] = temp

        gap //= 2

    print(data)`.trim();

  const codeStringBucketSort = `
#Bucket Sort Algorithm

def bucketSort(data):
    bucket = []

    for iIndex in range(len(data)):
        bucket.append([])

    for jIndex in data:
        index_bucket = int(10 * jIndex)
        bucket[index_bucket].append(jIndex)
        print(bucket)

    for iIndex in range(len(data)):
        # I used the built-in method sorted() to sort the array.
        bucket[iIndex] = sorted(bucket[iIndex])

        kIndex = 0

        for iIndex in range(len(data)):

            for jIndex in range(len(bucket[iIndex])):
                data[kIndex] = bucket[iIndex][jIndex]
                kIndex += 1

    print(data)`.trim();

  // Function to handle accordion toggle
  const toggleAccordion = (id) => {
    if (openAccordion === id) {
      setOpenAccordion(null); // If clicked on an open accordion, close it
    } else {
      setOpenAccordion(id); // Else open the clicked accordion
    }
  };
  return (
    <>
      <Header />

      <h1 className="head-h1" id="head-h1"red>
        8 must-know sorting algorithms
      </h1>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button ${
                openAccordion !== "collapseOne" ? "collapsed" : ""
              }`}
              type="button"
              onClick={() => toggleAccordion("collapseOne")}
              aria-expanded={openAccordion === "collapseOne"}
              aria-controls="collapseOne"
            >
              Bubble Sort
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse ${
              openAccordion === "collapseOne" ? "show" : ""
            }`}
            aria-labelledby="headingOne"
          >
            <div className="accordion-body">
              <strong>
                Bubble sort a simple sorting algorithm that works by swapping
                the items between them if they are in the wrong order.
              </strong>{" "}
              The worst and average-case complexity of the Bubble Sort is О(n2),
              meaning that the data is in the opposite order we want to sort, or
              the elements are arbitrarily distributed in the list. The
              best-case complexity is O(n). That's the case where the data is
              already sorted.{" "}
              <p>
                Bubble sort is used when :
                <ul>
                  <li>simple code is preferred;</li>
                  <li>the complexity doesn't matter.</li>
                </ul>
              </p>
              <pre>
                <code>{codeStringBubbleSort}</code>
              </pre>
              ,
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button ${
                openAccordion !== "collapseTwo" ? "collapsed" : ""
              }`}
              type="button"
              onClick={() => toggleAccordion("collapseTwo")}
              aria-expanded={openAccordion === "collapseTwo"}
              aria-controls="collapseTwo"
            >
              Selection Sort
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={`accordion-collapse collapse ${
              openAccordion === "collapseTwo" ? "show" : ""
            }`}
            aria-labelledby="headingTwo"
          >
            <div className="accordion-body">
              <strong>
                Selection Sort is an ameliorated version of Bubble Sort because
                of the performance.
              </strong>{" "}
              Even if they have the same worst-case performance, Selection Sort
              performs fewer swaps. Selection sort works in one of two ways: It
              either looks for the smallest item in the list and places it in
              the front of the list (ensuring that the item is in its correct
              location) or looks for the largest item and places it in the back
              of the list.
              <pre>
                <code>{codeStringSelectionSort}</code>
              </pre>
              Selection Sort has the same complexities as Bubble Sort. Selection
              Sort is used when:
              <ul>
                <li>Sorting small arrays</li>
                <li>checking off all the elements is compulsory</li>
                <li>Less swapping is required</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className={`accordion-button ${
                openAccordion !== "collapseThree" ? "collapsed" : ""
              }`}
              type="button"
              onClick={() => toggleAccordion("collapseThree")}
              aria-expanded={openAccordion === "collapseThree"}
              aria-controls="collapseThree"
            >
              Insertion Sort
            </button>
          </h2>
          <div
            id="collapseThree"
            className={`accordion-collapse collapse ${
              openAccordion === "collapseThree" ? "show" : ""
            }`}
            aria-labelledby="headingThree"
          >
            <div className="accordion-body">
              <strong>
                Insertion is a brute-force sorting algorithm but it does fewer
                comparisons than the Selection sort.
              </strong>
              <p>
                Insertion Sort works by choosing an item and by ordering the
                directs neighbors whether they are greater/smaller than the
                chosen item. As the number of sorted items builds, the algorithm
                checks new items against the sorted items and inserts the new
                item into the right position in the list. Example :
              </p>
              <pre>
                <code>{codeStringInsertionSort}</code>
              </pre>
              <ul>
                <li>
                  Insertion Sort has a worst and average complexity case of
                  O(n2). This occurs respectively when the array is sorted in
                  reverse order and when the elements are arbitrarily organized
                  in the array.
                </li>
                <li>
                  The best-case complexity is O(n). It occurs when the data is
                  already sorted in the desired order.
                </li>
                <li>Insertion Sort is used when :</li>
                <li>There are a few elements left to sort;</li>
                <li>The array is small.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className={`accordion-button ${
                openAccordion !== "collapseFour" ? "collapsed" : ""
              }`}
              type="button"
              onClick={() => toggleAccordion("collapseFour")}
              aria-expanded={openAccordion === "collapseFour"}
              aria-controls="collapseFour"
            >
              QuickSort
            </button>
          </h2>
          <div
            id="collapseFour"
            className={`accordion-collapse collapse ${
              openAccordion === "collapseFour" ? "show" : ""
            }`}
            aria-labelledby="headingFour"
          >
            <div className="accordion-body">
              <strong>
                QuickSort is an efficient sorting algorithm. It uses the
                divide-conquer approach to split the array into sub-arrays that
                is recursively called to sort the elements.
              </strong>{" "}
              <p>
                Implement a QuickSort algorithm requires to choose a pivot, then
                split the array into two sub-arrays according to the pivot, then
                arrange them following if they are greater/smaller than the
                pivot. Then we sort the two sub-arrays and repeat the process
                again.
              </p>
              <pre>
                <code>{codeStringQuickSort}</code>
              </pre>
              <ul>
                <li>
                  QuickSort has worst-case complexity of O(n2). It occurs when
                  the pivot element picked is always either the greatest or the
                  smallest element.
                </li>
                <li>
                  The best-case and average-case complexity are O(n*log(n)). It
                  occurs when the pivot element is always the middle element or
                  near to the middle element.
                </li>
                <li>QuickSort is used when :</li>
                <li>Recursion is needed and supported;</li>
                <li>The array is small;</li>
                <li>There are a few elements left to sort.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className={`accordion-button ${
                openAccordion !== "collapseFive" ? "collapsed" : ""
              }`}
              type="button"
              onClick={() => toggleAccordion("collapseFive")}
              aria-expanded={openAccordion === "collapseFive"}
              aria-controls="collapseFive"
            >
              MergeSort
            </button>
          </h2>
          <div
            id="collapseFive"
            className={`accordion-collapse collapse ${
              openAccordion === "collapseFive" ? "show" : ""
            }`}
            aria-labelledby="headingFive"
          >
            <div className="accordion-body">
              <p>
                A Mergesort works by applying the divide and conquer approach.
                The sort begins by breaking the dataset into individual pieces
                and sorting the pieces. It then merges the pieces in a manner
                that ensures that it has sorted the merged piece.
              </p>
              <p>
                The sorting and merging continue until the entire dataset is
                again a single piece
              </p>
              <p>
                An example of a merge sort. First divide the list into the
                smallest unit (1 element), then compare each element with the
                adjacent list to sort and merge the two adjacent lists. Finally,
                all the elements are sorted and merged.
              </p>
              <pre>
                <code>{codeStringMergeSort}</code>
              </pre>
              <p>
                MergeSort has worst-case and average-case complexity of
                O(n*log(n)) which makes it fastest than some of the other
                sorting algorithms.
              </p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className={`accordion-button ${
                openAccordion !== "collapseSix" ? "collapsed" : ""
              }`}
              type="button"
              onClick={() => toggleAccordion("collapseSix")}
              aria-expanded={openAccordion === "collapseSix"}
              aria-controls="collapseSix"
            >
              Bucket Sort
            </button>
          </h2>
          <div
            id="collapseSix"
            className={`accordion-collapse collapse ${
              openAccordion === "collapseSix" ? "show" : ""
            }`}
            aria-labelledby="headingSix"
          >
            <div className="accordion-body">
              <p>
                Bucket Sort algorithm work by dividing the array into buckets.
                Then the elements in each bucket are sorted using any sorting
                algorithms or by recursively calling the Bucket Sort algorithm.
              </p>
              <p>
                The process of bucket sort can be view as a scatter-gather
                approach. The elements are first scattered into buckets then the
                elements of buckets are sorted. Finally, the elements are
                gathered in order.
              </p>
              <pre>
                <code>{codeStringBucketSort}</code>
              </pre>
              <p>
                Bucket Sort algorithm has the worst-case complexity of O(n2). It
                occurs when elements in the same range are put in the same
                bucket, resulting in more elements in some buckets than others.
                Also, it can be even worse when an inappropriate sorting
                algorithm is used to sort elements in the buckets.
              </p>
              <p>
                The best-case complexity is O(n+k). It occurs when the elements
                are uniformly distributed in the buckets with a nearly equal
                number of elements in each bucket. It can even be better if the
                array is already sorted.
              </p>
              <p>
                The average-case complexity is O(n). It occurs when elements are
                randomly distributed in the array.
              </p>
              Bucket Sort is used when :
              <ul>
                <li>Bucket Sort is used when :</li>
                <li>Input is uniformly distributed over a range.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button
              className={`accordion-button ${
                openAccordion !== "collapseSeven" ? "collapsed" : ""
              }`}
              type="button"
              onClick={() => toggleAccordion("collapseSeven")}
              aria-expanded={openAccordion === "collapseSeven"}
              aria-controls="collapseSeven"
            >
              Shell Sort
            </button>
          </h2>
          <div
            id="collapseSeven"
            className={`accordion-collapse collapse ${
              openAccordion === "collapseSeven" ? "show" : ""
            }`}
            aria-labelledby="headingSeven"
          >
            <div className="accordion-body">
              <p>
                Shell Sort is a variation of Insertion Sort. With this
                algorithm, the array is sorted at a specific interval based on
                the chosen sequence. The interval between the elements is
                gradually decreased based on the sequence used. The performance
                of the shell sort depends on the type of sequence used for a
                given input array.
              </p>{" "}
              <pre>
                <code>{codeStringShellSort}</code>
              </pre>
              <ul>
                <li>
                  Shell Sort has worst-case complexity less or equal than O(n2).
                </li>
                <li>
                  Shell Sort has average-case and best-case complexity of
                  O(n*log(n)).
                </li>
                <li>Shell Sort is used when:</li>
                <li>Recursion exceeds a limit.</li>
                <li>
                  Insertion doesn't perform well when close elements are far.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEight">
            <button
              className={`accordion-button ${
                openAccordion !== "collapseEight" ? "collapsed" : ""
              }`}
              type="button"
              onClick={() => toggleAccordion("collapseEight")}
              aria-expanded={openAccordion === "collapseEight"}
              aria-controls="collapseEight"
            >
              Heap Sort
            </button>
          </h2>
          <div
            id="collapseEight"
            className={`accordion-collapse collapse ${
              openAccordion === "collapseEight" ? "show" : ""
            }`}
            aria-labelledby="headingEight"
          >
            <div className="accordion-body">
              <p>
                Heap Sort is one of the best sorting methods being in-place and
                with no quadratic worst-case complexity. Heap Sort uses a heap
                data structure. A heap is a complete binary tree. It also
                verifies such rules as:
              </p>
              <ul>
                <li>children are smaller than parents;</li>
                <li>
                  The largest/smallest element is at the root of the heap,
                  depending on the way you sorted it.
                </li>
              </ul>
              <p>
                To make a heap sort algorithm, we must create a heap of the
                array first. When done, we can now write the Heap Sort
                algorithm. The advantage with Heap Sort is that the value at the
                root is always greater than all value, so we can put it at the
                end of the sorted array, remove it from the heap, and then
                heapify the binary tree again to have the greater value at the
                top again.
              </p>
              <pre>
                <code>{codeStringHeapSort}</code>
              </pre>
              <p>
                Heap Sort has O(n*log(n)) time complexities for all the cases (
                best case, average case, and worst case) making it one of the
                most used sorting algorithms.
              </p>
              <p>
                Heapsort is great when you need to know just the "smallest" (or
                "largest") of a collection of items, without the overhead of
                keeping the remaining items in sorted order. For example, a
                Priority Queue.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Main;
