export interface Order {
  price: number,
  size: number,
}
export interface ServerRespond {
  stock: string,
  top_bid: Order,
  top_ask: Order,
  timestamp: Date,
}

class DataStreamer {
  static API_URL: string = 'public/index.html';

  static getData(callback: (data: string) => void): void {
    const request = new XMLHttpRequest();
    request.open('GET', DataStreamer.API_URL, true);

    request.onload = () => {
      if (request.status === 200) {
        // Pass the HTML content directly to the callback
        callback(request.responseText);
      } else {
        alert('Request failed');
      }
    };

    request.send();
  }
}



export default DataStreamer;