import React, { PureComponent } from 'react';

import DataFeed from './api/'
import * as S from './styles'
import {
  widget,
  ChartingLibraryWidgetOptions,
  LanguageCode,
  IChartingLibraryWidget,
} from '../../../../public/static/charting_library'

export interface ChartContainerProps {
  symbol: ChartingLibraryWidgetOptions['symbol'];
  interval: ChartingLibraryWidgetOptions['interval'];

  // BEWARE: no trailing slash is expected in feed URL
  datafeedUrl: string;
  libraryPath: ChartingLibraryWidgetOptions['library_path'];
  chartsStorageUrl: ChartingLibraryWidgetOptions['charts_storage_url'];
  chartsStorageApiVersion: ChartingLibraryWidgetOptions['charts_storage_api_version'];
  clientId: ChartingLibraryWidgetOptions['client_id'];
  userId: ChartingLibraryWidgetOptions['user_id'];
  fullscreen: ChartingLibraryWidgetOptions['fullscreen'];
  autosize: ChartingLibraryWidgetOptions['autosize'];
  studiesOverrides: ChartingLibraryWidgetOptions['studies_overrides'];
  containerId: ChartingLibraryWidgetOptions['container_id'];
}

export interface ChartContainerState {
}

function getLanguageFromURL(): LanguageCode | null {
  const regex = new RegExp('[\\?&]lang=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' ')) as LanguageCode;
}

export class ChartContainer extends PureComponent<Partial<ChartContainerProps>, ChartContainerState> {
  public static defaultProps = {
    symbol: 'BTC',
    interval: '1',
    containerId: 'tv_chart_container',
    libraryPath: '/static/charting_library/',
    chartsStorageUrl: 'https://saveload.tradingview.com',
    chartsStorageApiVersion: '1.1',
    clientId: 'tradingview.com',
    userId: 'public_user_id',
    fullscreen: false,
    autosize: true
  };

  private tvWidget: IChartingLibraryWidget | null = null;

  public componentDidMount(): void {
    const widgetOptions: ChartingLibraryWidgetOptions = {
      symbol: this.props.symbol as string,
      datafeed: DataFeed,
      interval: this.props.interval as ChartingLibraryWidgetOptions['interval'],
      container_id: this.props.containerId as ChartingLibraryWidgetOptions['container_id'],
      library_path: this.props.libraryPath as string,

      locale: getLanguageFromURL() || 'en',
      disabled_features: [
        "use_localstorage_for_settings", "timeframes_toolbar",
        "volume_force_overlay", "left_toolbar", "show_logo_on_all_charts",
        "caption_buttons_text_if_possible", "header_settings", "header_chart_type",
        "header_indicators", "header_compare", "compare_symbol", "header_screenshot",
        "header_widget_dom_node", "header_saveload", "header_undo_redo",
        "header_interval_dialog_button", "show_interval_dialog_on_key_press",
        "header_symbol_search", "header_resolutions", "header_widget"
      ],
      enabled_features: ['study_templates'],
      charts_storage_url: this.props.chartsStorageUrl,
      charts_storage_api_version: this.props.chartsStorageApiVersion,
      client_id: this.props.clientId,
      user_id: this.props.userId,
      fullscreen: this.props.fullscreen,
      autosize: this.props.autosize,
      loading_screen:  { backgroundColor: "#2E303C" },
      studies_overrides: {
        "volume.volume.color.0": "#E6007A",
        "volume.volume.color.1": "#0CA564",
      },
      overrides: {
        "paneProperties.background": "#22232d",
        "paneProperties.vertGridProperties.color": "#b1b1b100",
        "paneProperties.horzGridProperties.color": "#b1b1b100",
        "symbolWatermarkProperties.transparency": 90,
        "scalesProperties.textColor": "#fff",
        "scalesProperties.fontSize": 11,
        "scalesProperties.backgroundColor": "#2E303C",
        "paneProperties.topMargin": 15,
        "mainSeriesProperties.candleStyle.upColor": '#0CA564',
        "mainSeriesProperties.candleStyle.downColor": '#E6007A',
        "mainSeriesProperties.candleStyle.borderUpColor": "#0CA564",
        "mainSeriesProperties.candleStyle.borderDownColor": "#E6007A",
        "mainSeriesProperties.candleStyle.wickUpColor": "#0CA564",
        "mainSeriesProperties.candleStyle.wickDownColor": "#E6007A"
      }
    };

    const tvWidget = new widget(widgetOptions);
    this.tvWidget = tvWidget;

    tvWidget.onChartReady(() => console.log('Chart has loaded'))
  }

  public componentWillUnmount(): void {
    if (this.tvWidget !== null) {
      this.tvWidget.remove();
      this.tvWidget = null;
    }
  }

  public render(): JSX.Element {
    return (
      <S.Wrapper
        id={ this.props.containerId }
      />
    );
  }
}

export default ChartContainer;
