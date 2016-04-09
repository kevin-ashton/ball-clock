package main
import "fmt"
func main() {
  fmt.Println("hello")
  foo("world!")
}

func foo(input1 string){
  fmt.Println(input1)
}
