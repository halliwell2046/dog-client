import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GoogleService {
  constructor(private http: HttpClient) {}

  geoCoding(data: any) {
    let apiAddress = data.street.split(" ").join("+");
    let apiCity = data.city.split(" ").join("+");
    let apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${apiAddress},+${apiCity},+${data.state}&key=AIzaSyCWe1USFU9NpbwOkpKsE6X0mlouDBYc-W0`;

    return this.http.get(apiUrl);
  }
}
