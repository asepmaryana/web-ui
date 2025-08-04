import { Component, OnInit } from '@angular/core';
import { ApiService, Device } from '../../services/api.service';
import { forkJoin } from 'rxjs';

interface ApiResponse<T> {
  status: boolean;
  data: T;
  message?: string;
}

interface AlarmResponseData {
  rows: any[];
  count: number;
}

interface StatusItem {
  label: string;
  value: number;
  key: string;
}

@Component({
  selector: 'app-dashboard-summary',
  templateUrl: './dashboard-summary.component.html',
  styleUrls: ['./dashboard-summary.component.css']
})
export class DashboardSummaryComponent implements OnInit {
  public isLoading: boolean = true;
  public errorMessage: string | null = null;
  public lastUpdated: Date | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    
  }

}