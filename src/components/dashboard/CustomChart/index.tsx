import React, { PureComponent } from 'react'

import * as S from './styles'
import {
  ChartingLibraryWidgetOptions,
  IChartingLibraryWidget,
  LanguageCode,
  widget,
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
  public static defaultProps: ChartContainerProps = {
    symbol: 'AAPL',
    interval: '1',
    containerId: 'tv_chart_container',
    datafeedUrl: 'https://demo_feed.tradingview.com',
    libraryPath: '/static/charting_library/',
    chartsStorageUrl: 'https://saveload.tradingview.com',
    chartsStorageApiVersion: '1.1',
    clientId: 'tradingview.com',
    userId: 'public_user_id',
    fullscreen: false,
    autosize: true,
    studiesOverrides: {},
  };

  private tvWidget: IChartingLibraryWidget | null = null;

  public componentDidMount(): void {
    const widgetOptions: ChartingLibraryWidgetOptions = {
      symbol: this.props.symbol as string,
      datafeed: new (window as any).Datafeeds.UDFCompatibleDatafeed(this.props.datafeedUrl),
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
      studies_overrides: this.props.studiesOverrides,
      loading_screen:  { backgroundColor: "#2E303C" },
      overrides: {
        "paneProperties.background": "#2E303C",
        "paneProperties.vertGridProperties.color": "#b1b1b1",
        "paneProperties.horzGridProperties.color": "#b1b1b1",
        "symbolWatermarkProperties.transparency": 90,
        "scalesProperties.textColor": "#fff",
        "scalesProperties.bgColor": "#AAA",
        "scalesProperties.fontSize": 11,
        "paneProperties.topMargin": 15,
        "mainSeriesProperties.candleStyle.wickUpColor": '#336854',
        "mainSeriesProperties.candleStyle.wickDownColor": '#7f323f',
      }
    };

    this.tvWidget = new widget(widgetOptions);
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
