package main

func main() {

	shirtItem := newItem("Nike Shirt")

	observerFirst := &Customer{id: "albaqiananta@gmail.com"}
	observerSecond := &Customer{id: "mumet@gmail.com"}

	shirtItem.register(observerFirst)
	shirtItem.register(observerSecond)

	shirtItem.updateAvailability()
}
