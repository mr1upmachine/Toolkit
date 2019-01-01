import { Injectable } from '@angular/core';
import { ApiService } from '@tk/shared/api/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiceApiService {
  private readonly diceHistoryKey = 'diceHistory';
  readonly diceHistoryRef = this.apiService.dbCurrentUser.collection(this.diceHistoryKey);
  readonly diceHistorySortedRef = this.apiService.dbCurrentUser.collection(this.diceHistoryKey, ref => ref.orderBy('time', 'desc'));

  constructor(
    private apiService: ApiService
  ) { }

  addToHistory(result: number, expr: string, detail?: string): void {
    this.diceHistoryRef.add({
      result,
      expr,
      // detail, // TODO: Uncomment when detail is avail
      time: new Date()
    });
  }

  getHistory(): Observable<any[]> {
    return this.diceHistorySortedRef.get().pipe(
      map(querySnapshot => {
        const diceHistory = [];
        querySnapshot.forEach(doc => {
          const data = doc.data();
          data.time = data.time.toDate();
          diceHistory.push(data);
        });
        return diceHistory;
      })
    );
  }
}
