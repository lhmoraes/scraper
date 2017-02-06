"use strict";
// import request = require("request");
const Crawler = require("crawler");
class B2SController {
    // constructor(configs: IServerConfigurations, database: IDatabase) {
    constructor(configs) {
        this.configs = configs;
        // this.database = database;
    }
    getCategories(req, reply) {
        var Crawler = require("crawler");
        var url = require('url');
        var c = new Crawler({
            maxConnections: 10,
            // This will be called for each crawled page
            callback: function (error, res, done) {
                if (error) {
                    console.log(error);
                }
                else {
                    var $ = res.$;
                    // $ is Cheerio by default
                    //a lean implementation of core jQuery designed specifically for the server
                    //console.log("Value: " + $(".row-fluid.padding-m-bottom").html());
                    // console.log("Value: " + $(".row-fluid.padding-m-bottom").html());
                    // ('#blogPagination').find('a').attr('href');
                    $('.row-fluid.padding-m-bottom').find('a').each(function () {
                        var cSub = new Crawler({
                            maxConnections: 10,
                            // This will be called for each crawled page
                            callback: function (error, res, done) {
                                if (error) {
                                    console.log(error);
                                }
                                else {
                                    var $ = res.$;
                                    // $ is Cheerio by default
                                    //a lean implementation of core jQuery designed specifically for the server
                                    //console.log("Value: " + $(".row-fluid.padding-m-bottom").html());
                                    // console.log("Value: " + $(".row-fluid.padding-m-bottom").html());
                                    // ('#blogPagination').find('a').attr('href');
                                    console.log("Sub Category: " + $(".menu-title").html());
                                }
                                done();
                            }
                        });
                        var categoryUrl = $(this).attr('href');
                        cSub.queue('http://www.bestbuy.ca' + categoryUrl);
                        console.log("Category URL:" + categoryUrl);
                        //console.log($(this).find('p').html());
                    });
                }
                done();
            }
        });
        // Queue just one URL, with default callback
        c.queue('http://www.bestbuy.ca');
        // Queue a list of URLs
        //       c.queue(['http://www.google.com/','http://www.yahoo.com']);
        // // Queue URLs with custom callbacks & parameters
        //       c.queue([{
        //         uri: 'http://parishackers.org/',
        //         jQuery: false,
        //
        //         // The global callback won't be called
        //         callback: function (error, res, done) {
        //           if(error){
        //             console.log(error);
        //           }else{
        //             console.log('Grabbed', res.body.length, 'bytes');
        //           }
        //           done();
        //         }
        //       }]);
        reply('ok');
        // const UserAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36';
        //
        // const dcCraw = new Crawler({
        //   maxConnections : 10,
        //   // This will be called for each crawled page
        //   callback : function (error, result, $) {
        //
        //     // $ is Cheerio by default
        //     //a lean implementation of core jQuery designed specifically for the server
        //   }
        // });
        //
        //
        // dcCraw.queue([{
        //   userAgent : UserAgent,
        //   referer : 'https://search.naver.com',
        //   uri : 'https://search.naver.com/search.naver?ie=utf8&where=news&query=%EB%B0%95%EB%B3%B4%EA%B2%80&sm=tab_tmr&frm=mr&sort=0',
        //   callback : function(error, result, $){
        //     if(error || !$) {
        //       console.log(error);
        //       return
        //     }
        //
        //     var templateList = [];
        //     var count = 0;
        //     $('body').find('.type01').children().each(function(idx){
        //       var $title =  $(this).find('._sp_each_title');
        //       var title = $title.text();
        //       var link = $title.attr('href');
        //       var imgSrc = $(this).find('.thumb').find('img').attr('src');
        //       var time = $(this).find('.txt_inline').text();
        //       var desc = $(this).find('dl').children().eq(2).text();
        //
        //       var template = {
        //         title : title,
        //         link : link,
        //         imgSrc : imgSrc,
        //         time : time,
        //         desc : desc
        //       };
        //
        //       templateList.push(template);
        //
        //     });
        // var goldwasher = require('goldwasher');
        //
        // var html = '<a href="/oak/strong"><h1>Oak is strong and also gives shade.</h1></a>';
        // html += '<h2><a href="http://www.catsanddogs.com/hate">Cats and dogs each hate the other.</a></h2>';
        // html += '<h2>Some unwanted text.</h2>';
        //
        // var options = {
        //   selector: 'h1, h2',
        //   url: 'http://www.oakisstrong.com',
        //   filterTexts: ['Some unwanted text.'],
        //   filterLocale: 'en',
        //   filterKeywords: ['also']
        // }
        //
        // var result = goldwasher(html, options);
        //
        // console.log(result);
        // $ = cheerio.load('<h2 class = "title">Hello world</h2>');
        //
        // $('h2.title').text('Hello there!');
        // $('h2').addClass('welcome');
        //
        // reply($.html());
        // var request = require('request');
        // let url = 'http://www.imdb.com/title/tt1229340/';
        //
        // request(url, function(error, response, html){
        //   if(!error){
        //     var $ = cheerio.load(html);
        //
        //     var title, release, rating;
        //     var json = { title : "", release : "", rating : ""};
        //
        //     // We'll use the unique header class as a starting point.
        //
        //     $('.header').filter(function(){
        //
        //       // Let's store the data we filter into a variable so we can easily see what's going on.
        //
        //       var data = $(this);
        //
        //       // In examining the DOM we notice that the title rests within the first child element of the header tag.
        //       // Utilizing jQuery we can easily navigate and get the text by writing the following code:
        //
        //       title = data.children().first().text();
        //
        //       // Once we have our title, we'll store it to the our json object.
        //
        //       json.title = title;
        //     })
        //   }
        // });
        // let url = "http://www.wunderground.com/cgi-bin/findweather/getForecast?&query=02888";
        //
        // request(url, function (error, response, body) {
        //   if (!error) {
        //     var $ = cheerio.load(body),
        //       temperature = $("[data-variable='temperature'] .wx-value").html();
        //
        //     console.log("It’s " + temperature + " degrees Fahrenheit.");
        //   } else {
        //     console.log("We’ve encountered an error: " + error);
        //   }
        // });
        // let userId = request.auth.credentials.id;
        // let top = request.query.top;
        // let skip = request.query.skip;
        // this.database.taskModel.find({ userId: userId }).lean(true).skip(skip).limit(top).then((tasks: Array<ITask>) => {
        //     reply(tasks);
        // }).catch((error) => {
        //     reply(Boom.badImplementation(error));
        // });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = B2SController;
//# sourceMappingURL=b2s-controller.js.map