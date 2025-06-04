package main

import (
	"fmt"
	"sync"
)

type PusatDataSingleton struct {
	DataTersimpan []string
}

var _instance *PusatDataSingleton
var once sync.Once

// Konstruktor: hanya dipanggil sekali oleh sync.Once
func getDataSingleton() *PusatDataSingleton {
	once.Do(func() {
		_instance = &PusatDataSingleton{
			DataTersimpan: []string{},
		}
	})
	return _instance
}

// Method: Tambahkan data
func (p *PusatDataSingleton) AddSebuahData(input string) {
	p.DataTersimpan = append(p.DataTersimpan, input)
}

// Method: Hapus data berdasarkan index
func (p *PusatDataSingleton) HapusSebuahData(index int) {
	if index >= 0 && index < len(p.DataTersimpan) {
		p.DataTersimpan = append(p.DataTersimpan[:index], p.DataTersimpan[index+1:]...)
	}
}

// Method: Print semua data
func (p *PusatDataSingleton) PrintSemuaData() {
	for i, data := range p.DataTersimpan {
		fmt.Printf("%d: %s\n", i+1, data)
	}
}

// Method: Kembalikan semua data
func (p *PusatDataSingleton) GetSemuaData() []string {
	return p.DataTersimpan
}

func main() {
	// 1 & 2
	data1 := getDataSingleton()
	data2 := getDataSingleton()

	// 3 - Tambahkan nama anggota dan asisten praktikum
	data1.AddSebuahData("Mas Revan")
	data1.AddSebuahData("Mas Fazza")
	data1.AddSebuahData("Fathur ala katir")
	data1.AddSebuahData("Kang Ade")

	// 4 - Print semua data dari data2 (harus sama)
	fmt.Println("Data dari data2:")
	data2.PrintSemuaData()

	// 5 - Hapus asisten praktikum
	data2.HapusSebuahData(3)

	// 6 - Print dari data1, seharusnya index 3 sudah tidak ada
	fmt.Println("\nData dari data1 setelah penghapusan:")
	data1.PrintSemuaData()

	// 7 - Hitung jumlah elemen
	fmt.Printf("\nJumlah data di data1: %d\n", len(data1.GetSemuaData()))
	fmt.Printf("Jumlah data di data2: %d\n", len(data2.GetSemuaData()))
}
