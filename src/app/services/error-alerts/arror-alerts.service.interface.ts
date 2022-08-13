import { Subject } from "rxjs";

export abstract class IErrorAlertsService {
  constructor() { }
  public abstract AddErrorAndBroadcast(item: ErrorAlertItem): void;
  public abstract RemoveErrorAndBroadcast(item: ErrorAlertItem): void;
  public abstract GetErrorAlertItemsSubject(): Subject<ErrorAlertItem[]>;
}

export class ErrorAlertItem {
  /** Global counter for error alert items */
  static idNum: number = 0;

  id: string;
  message: string;
  /** dismiss time in miliseconds. When <=0, no auto dismiss*/
  autoDismissDelay: number;
  dismissFadeTime: number;
  isDismissing: boolean;
  /** Callback function on removal */
  onRemove: (item: ErrorAlertItem) => void;
  
  public constructor(message: string, autoDismissDelay: number = 0, fadeOut: boolean = true, onRemove: (item: ErrorAlertItem) => void = () => {}){
    this.id = String(ErrorAlertItem.idNum++);
    this.message = message;
    this.autoDismissDelay = autoDismissDelay;
    this.dismissFadeTime = fadeOut ? 250 : 0;
    this.isDismissing = false;
    this.onRemove = onRemove;
  }
}
