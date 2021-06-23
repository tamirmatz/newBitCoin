import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';

@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {
  chartsData = [{}]

  constructor(private bitcoinService: BitcoinService) { }

  async ngOnInit(): Promise<void> {
    const USDExchangeTradeVolume: any =  await this.bitcoinService.getUSDExchangeTradeVolume().toPromise()
    const AverageBlockSize: any =  await this.bitcoinService.getAverageBlockSize().toPromise()
    const MarketPrice: any = await this.bitcoinService.getMarketPrice().toPromise()
    this.chartsData = [USDExchangeTradeVolume, AverageBlockSize, MarketPrice]
  }

}
