import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ErrorAlertItem, IErrorAlertsService } from 'src/app/services/error-alerts/arror-alerts.service.interface';

@Component({
  selector: 'app-error-alerts',
  templateUrl: './error-alerts.component.html',
  styleUrls: ['./error-alerts.component.scss']
})
export class ErrorAlertsComponent implements OnInit {
  errorAlerts: ErrorAlertItem[] = [];

  constructor(private _errorAlertsService: IErrorAlertsService) {
    _errorAlertsService.GetErrorAlertItemsSubject().subscribe(
      newErrorAlerts => {
        this.errorAlerts = newErrorAlerts
      }
    );
  }

  ngOnInit(): void {
  }

  public onDismissal(item: ErrorAlertItem) {
    this._errorAlertsService.RemoveErrorAndBroadcast(item);
  }
}
