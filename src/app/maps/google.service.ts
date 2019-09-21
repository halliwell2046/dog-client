import { Injectable } from "@angular/core";
import { HttpClient, HttpHandler, HttpHeaders } from "@angular/common/http";
import { MAPAPIKEY } from 'src/environments/environment.prod';

@Injectable({
  providedIn: "root"
})
export class GoogleService {
  constructor(public http: HttpClient) {}

  geoCoding(data: any) {
    let apiAddress = data.street.split(" ").join("+");
    let apiCity = data.city.split(" ").join("+");
    let apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${apiAddress},+${apiCity},+${data.state}&key=${MAPAPIKEY}`;

    return this.http.get(apiUrl);
  }
}
