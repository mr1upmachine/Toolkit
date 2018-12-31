// import { QuerySnapshot } from '@angular/fire/firestore';
// import { map, tap } from 'rxjs/operators';
// import { OperatorFunction } from 'rxjs';

// // shorthand for console.log()
// export function log<T>(message?: string): OperatorFunction<T, T> {
//   return tap(e => console.log(message, e));
// }

// // Firebase data map, where it extracts all the data in a collection and places it into an array
// export function fbDataMap<T>(): OperatorFunction<any, any> {
//   return map(querySnapshot => {
//       const queryList = [];
//       querySnapshot.forEach(doc => {
//         queryList.push(doc.data());
//       });
//       return queryList as T[];
//   });
// }
