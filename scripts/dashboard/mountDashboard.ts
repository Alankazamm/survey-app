import Chart from 'chart.js/auto';
import { WordCloudController, WordElement } from 'chartjs-chart-wordcloud';
import { WordCloudChart } from 'chartjs-chart-wordcloud';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { accountStatus, averageMarketperAge, invest, words, investmentByDateData } from '../firebaseFunctions/analytics';
import { PluginOptionsByType } from 'chart.js/dist/types/index';

interface Word {
    text: string;
    weight: number;
    [key: string]: any;
}

interface MyPluginOptions extends PluginOptionsByType<'wordCloud'> {
    wordcloud: {
        minSize?: number;
        maxSize?: number;
        fontFamily?: string;
        fontWeight?: string | number;
        fontStyle?: string;
        fontVariant?: string;
        padding?: number;
        rotation?: number | ((word: Word) => number);
        rotationUnit?: 'deg' | 'rad';
        color?: ((word: Word) => string) | string;
        backgroundColor?: ((word: Word) => string) | string;
        fontSize?: {
            from: number;
            to: number;
        };
        spiral?: 'archimedean' | 'rectangular';
        enableHover?: boolean;
        hoverColor?: ((word: Word) => string) | string;
        hoverFontSize?: {
            from: number;
            to: number;
        };
        drawOutOfBound?: boolean;
    };
}

interface LabelContext {
    dataIndex: number;
    dataset: {
        data: number[];
        label: string;
        labels: string[];
    };
    chart: Chart;
}

interface InvestOption {
    [option: string]: {
        [status: string]: number;
    };
}
/*
create interface for:
averageMarketperAge = {
    "stock market": 0,
    "foreign exchange": 0,
    "commodity": 0,
    "bond market": 0,
    "cryptocurrency market": 0
}
*/
interface AverageMarketperAge {
    [market: string]: number;
}


export const mountDashboard = () => {
    Chart.register(WordCloudController, WordElement);

    const statusCanvas = document.getElementById('status-chart') as HTMLCanvasElement;
    const statusCtx = statusCanvas.getContext('2d');
    const statusChart = new Chart(statusCtx!, {
        type: 'pie',
        data: {
            datasets: [{
                data: Object.values(accountStatus),
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                label: 'Account Status'
            }],
            labels: Object.keys(accountStatus)
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Account Status'
                },
                datalabels: {
                    color: '#fff',
                    font: {
                        weight: 'bold',
                        size: 126
                    },
                    formatter: (value: number, context) => {
                        //fix 'context may be undefined' error
                        const ctx = context;
                        const label = ctx?.chart.data.labels?.[ctx.dataIndex];
                        return `${label}: ${value}`;
                    }
                }
            }
        },
    });

    const investCtx = document.getElementById('invest-chart') as HTMLCanvasElement;

    // Obtendo as chaves do objeto invest
    const options = Object.keys(invest);

    // Obtendo as chaves do primeiro objeto do invest (todas as opções de situação financeira)
    const labels = Object.keys(invest[options[0]]);

    // Obtendo os valores dos dados
    const data = options.map((option) => Object.values(invest[option]));

    // Criando o gráfico
    const chart = new Chart(investCtx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: options.map((option, index) => ({
                label: option,
                data: data[index],
                backgroundColor:
                    index === 0 ? 'rgb(255, 99, 132)' : (index === 1 ? 'rgb(54, 162, 235)' : 'rgb(255, 205, 86)'),
            })),
        },
        options: {

            scales: {
                y: {
                    beginAtZero: true,
                    axis: 'y',
                    display: true,
                    title: {
                        display: true,
                        text: 'Amount of answers',
                        color: 'black',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    },

                },


                x: {
                    stacked: false,
                    axis: 'x',
                    display: true,

                    title: {
                        display: true,
                        text: 'Financial Status',
                        color: 'black',
                        font: {
                            size: 16,
                            weight: 'bold'

                        }
                    }

                },


            },

        },
    });

    const ageCanvas = document.getElementById('age-chart') as HTMLCanvasElement;
    const ageCtx = ageCanvas.getContext('2d');
    //use AverageMarketperAge interface
    const ageChart = new Chart(ageCtx!, {
        type: 'bar',
        data: {
            //datasets are mapped to the values of the object
            datasets: [{
                data: Object.values(averageMarketperAge),
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(255, 159, 64)',
                    'rgb(75, 192, 192)'
                ],
                label: 'Average Age per Market'
            }],
            labels: Object.keys(averageMarketperAge)
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'rgb(0, 0, 0)'
                    },
                    display: false
                },
                title: {
                    display: true,
                    text: 'Average Age per Market'
                },
                datalabels: {
                    color: 'rgb(0, 0, 0)',
                    font: {
                        weight: 'bold',
                    },
                    formatter: (value: number, context) => {
                        //fix 'context may be undefined' error
                        const ctx = context;
                        const label = ctx?.chart.data.labels?.[ctx.dataIndex];
                        return `${label}: ${value}`;
                    }
                }
            }
        },
    });
    //create an array with the words to be used in the wordcloud chart whith the following format:   { key: "word", value: 10 },...
    const wordCloudData = Object.keys(words).map((key) => ({ key, value: words[key] }));
    console.log(wordCloudData);
    // wordcloud chart with the words color black
    const wordCloudCanvas = document.getElementById('wordcloud-chart') as HTMLCanvasElement;
    const wordCloudCtx = wordCloudCanvas.getContext('2d');
    const wordCloudChart = new WordCloudChart(wordCloudCtx!, {
        data: {
            labels: wordCloudData.map((data) => data.key),
            datasets: [{
                data: wordCloudData.map((d) => d.value),
                label: '',

                size: 30
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Most common investment loss reasons'
                },
                wordcloud: {
                    minSize: 220, // define o tamanho mínimo da fonte como 20
                    fontSize: {
                        from: 220, // define a faixa de tamanhos de fonte permitidos
                        to: 620
                    }
                }
            } as MyPluginOptions
        }
    });

    //6. markets-trhough-time-chart
    let dates: string[] = [];

    for (let market in investmentByDateData) {
        for (let date in investmentByDateData[market]) {
            if (!dates.includes(date)) {
                dates.push(date);
            }
        }
    }

    dates.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
    let investmentByDateDatasets = [];
    for (let market in investmentByDateData) {
        let values = [];

        for (let date of dates) {
            let value = investmentByDateData[market][date] || 0;
            values.push(value);
        }

        let investmentByDateDataset = {
            label: market,
            data: values,
            fill: false
        };

        investmentByDateDatasets.push(investmentByDateDataset);
    }

    const marketsThroughTimeCanvas = document.getElementById('markets-trhough-time-chart') as HTMLCanvasElement;
    const marketsThroughTimeCtx = marketsThroughTimeCanvas.getContext('2d');
    const marketsThroughTimeChart = new Chart(marketsThroughTimeCtx!, {
        type: 'line',
        data: {
            labels: dates,
            datasets: investmentByDateDatasets
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: 'rgb(0, 0, 0)'
                    },
                    display: true
                },
                title: {
                    display: true,
                    text: "Market engagement trend through time"
                },
                datalabels: {
                    color: 'rgb(0, 0, 0)',
                    font: {
                        weight: 'bold',
                    },
                    formatter: (value: number, context) => {
                        //fix 'context may be undefined' error
                        const ctx = context;
                        const label = ctx?.chart.data.labels?.[ctx.dataIndex];
                        return `${label}: ${value}`;
                    }
                }
            }
        },
    });
}