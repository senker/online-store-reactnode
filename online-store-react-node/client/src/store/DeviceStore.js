import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [
      {
        id: 1,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://www.mytrendyphone.dk/images/iPhone-12-Pro-256GB-Pacific-Blue-0194252040072-28102020-01-p.jpg",
      },
      {
        id: 2,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://www.mytrendyphone.dk/images/iPhone-12-Pro-256GB-Pacific-Blue-0194252040072-28102020-01-p.jpg",
      },
      {
        id: 3,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://www.mytrendyphone.dk/images/iPhone-12-Pro-256GB-Pacific-Blue-0194252040072-28102020-01-p.jpg",
      },
      {
        id: 4,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://www.mytrendyphone.dk/images/iPhone-12-Pro-256GB-Pacific-Blue-0194252040072-28102020-01-p.jpg",
      },
      {
        id: 5,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://www.mytrendyphone.dk/images/iPhone-12-Pro-256GB-Pacific-Blue-0194252040072-28102020-01-p.jpg",
      },
      {
        id: 6,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://www.mytrendyphone.dk/images/iPhone-12-Pro-256GB-Pacific-Blue-0194252040072-28102020-01-p.jpg",
      },
      {
        id: 7,
        name: "Iphone 12 pro",
        price: 25000,
        rating: 5,
        img: "https://www.mytrendyphone.dk/images/iPhone-12-Pro-256GB-Pacific-Blue-0194252040072-28102020-01-p.jpg",
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
