/** auto-tracker code by FizzyElf - https://fizzyelf.jcink.net **/
async function FillTracker(username, params = {}) {

    /***  CONFIGURATION AREA ***/
    const config = {
      includedforums: (params.includeCategoryIds || []).map(x => "c_" + x).concat(params.includeForumIds || []),
      historyforums: params.historyForumNames || [],
      historyforumids: params.historyForumIds || [],
      commforums: params.commForumNames || [],
      commforumids: params.commForumIds || [],
      commhistoryforums: params.commHistoryForumNames || [],
      commhistoryforumids: params.commHistoryForumIds || [],
      socialforums: params.socialForumNames || [],
      socialforumids: params.socialForumIds || [],
      socialhistoryforums: params.socialHistoryForumNames || [],
      socialhistoryforumids: params.socialHistoryForumIds || [],
      devforums: params.devForumNames || [],
      devforumids: params.devForumIds || [],
      devhistoryforums: params.devHistoryForumNames || [],
      devhistoryforumids: params.devHistoryForumIds || [],
      reqforums: params.reqForumNames || [],
      reqforumids: params.reqForumIds || [],
      reqhistoryforums: params.reqHistoryForumNames || [],
      reqhistoryforumids: params.reqHistoryForumIds || [],
      ignoreforums: params.ignoreForumNames || [],
      ignoreforumids: params.ignoreForumIds || [],
      lockedclass: params.lockedMacroIdentifier || "[title=Closed]",
      lockedforums: params.archiveForumNames || [],
      lockedforumids: params.archiveForumIds || [],
      indicators: params.indicators || ['<span style="font-family: roboto, verdana, arial, sans">ÃƒÆ’Ã‚Â¢Ãƒâ€¦Ã¢â‚¬Å“ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ</span>', '<span style="font-family: roboto, verdana, arial, sans">ÃƒÆ’Ã‚Â¢Ãƒâ€¦Ã‚Â¾Ãƒâ€šÃ‚Â¤</span>'],
      separator: params.separator || "|",
      username: username.replace(/&#([0-9]+);/g, (m, p1) => String.fromCharCode(p1)),
      trackerwrap: params.thisTracker || $('#trackerwrap'),
      historywrap: params.thisHistory || $('#historywrap'),
      commwrap: params.thisCommTracker || $('#commwrap'),
      socialwrap: params.thisSocialTracker || $('#socialwrap'),
      devwrap: params.thisDevTracker || $('#devwrap'),
      reqwrap: params.thisDevTracker || $('#reqwrap'),
      pagelimit: params.pageLimit || 5,
      previousposters: params.previousPosters || {},
      lockedregex: (params.archiveForumRegex)?  RegExp(params.archiveForumRegex) : /archive/i ,
      closedthreads: (params.completedThreads) || []
    }
    if (!config.includedforums.length) config.includedforums.push("all");
    /*** END CONFIGURATION ***/
    if (/^[-\w _\d]+$/.test(params.indicators[0])) {
    params.indicators[0] = `<i class="${params.indicators[0]}"></i>`
    }
    if (/^[-\w _\d]+$/.test(params.indicators[1])) {
      params.indicators[1] = `<i class="${params.indicators[1]}"></i>`
    }
  
    /***  RUN THE SEARCH ***/
  
    let href = `/index.php?act=Search&CODE=01&nomobile=1`;
    let data = '';
    try {
      //console.log(`fetching ${href}`);
      data = await $.post(href, {
        keywords: "",
        namesearch: config.username,
        forums: config.includedforums,
        searchsubs: "1",
        prune: "0",
        prune_type: "newer",
        sort_key: "last_post",
        sort_order: "desc",
        search_in: "posts",
        result_type: "topics",
      });
      //console.log('success.');
    } catch (err) {
      console.log(`Ajax error loading page: ${href} - ${err.status} ${err.statusText}`);
      config.trackerwrap.append('<div class="profile--nothreads">Search Failed</div>');
      return;
    }
    doc = new DOMParser().parseFromString(data, 'text/html');
  
    let meta = $('meta[http-equiv="refresh"]', doc);
    if (meta.length) {
      href = meta.attr('content').substr(meta.attr('content').indexOf('=') + 1) + '&st=0';
      //.log('sessionid = ' + href.match(/&searchid=([a-zA-Z0-9]+)&/)[1]);
      //console.log('search = ' + href);
    } else {
      let boardmessage = $('#board-message .tablefill .postcolor', doc).text();
      config.trackerwrap.append(`<div class="profile--nothreads">${boardmessage}</div>`);
      config.historywrap.append(`<div class="profile--nothreads">${boardmessage}</div>`);
      config.commwrap.append(`<div class="profile--nothreads">${boardmessage}</div>`);
      config.socialwrap.append(`<div class="profile--nothreads">${boardmessage}</div>`);
      config.devwrap.append(`<div class="profile--nothreads">${boardmessage}</div>`);
      config.reqwrap.append(`<div class="profile--nothreads">${boardmessage}</div>`);
      return;
    }
  
    await parseResults(href, config, 0);
    
  }
  
  
  
  parseResults = async (searchlink, config, page) => {
    let doc;
    searchlink = searchlink.replace(/&st=\d+/, `&st=${page * 25}`);
    let data = '';
    try {
      //console.log(`fetching ${searchlink}`);
      data = await $.get(searchlink);
      //console.log('success.');
    } catch (err) {
      console.log(`Ajax error loading page: ${searchlink} - ${err.status} ${err.statusText}`);
      console.log(err)
      config.trackerwrap.append('<div class="profile--nothreads">Search Failed</div>');
      return;
    }
    doc = new DOMParser().parseFromString(data, 'text/html');
  
    $('#search-topics .tablebasic > tbody > tr', doc).each(function (i, e) {
      if (i > 0) {
        const cells = $(e).children('td');
        const location = $(cells[3]).text();
        const location_id = $(cells[3]).find('a').attr('href').match(/showforum=([^&]+)&?/)[1]
        const threadLink = $(cells[7]).children('a').attr('href');
        const thread_id = threadLink.match(/showtopic=([^&]+)&?/)[1];
        if (!config.ignoreforums.includes(location) && !config.ignoreforumids.includes(location_id)) {
          const locked = $(cells[0]).find(`${config.lockedclass}`).length 
                        || config.lockedforums.includes(location) 
                        || config.lockedforumids.includes(location_id) 
                        || config.lockedregex.test(location)
                        || config.closedthreads.includes(thread_id);
          const title = $(cells[2]).find('td:nth-child(2) > a').first().text();
          const threadDesc = $(cells[2]).find('.desc').text();
          const history = config.historyforums.includes(location) || config.historyforumids.includes(location_id);
          const comm = config.commforums.includes(location) || config.commforumids.includes(location_id);
      const commhistory = config.commhistoryforums.includes(location) || config.commhistoryforumids.includes(location_id);
          const social = config.socialforums.includes(location) || config.socialforumids.includes(location_id);
      const socialhistory = config.socialhistoryforums.includes(location) || config.socialhistoryforumids.includes(location_id);
          const dev = config.devforums.includes(location) || config.devforumids.includes(location_id);
      const devhistory = config.devhistoryforums.includes(location) || config.devhistoryforumids.includes(location_id);
          const req = config.reqforums.includes(location) || config.reqforumids.includes(location_id);
      const reqhistory = config.reqhistoryforums.includes(location) || config.reqhistoryforumids.includes(location_id);
          const lastPoster = $(cells[7]).find('a[href*=showuser]').text().trim().replace(/&#([0-9]+);/g, (m, p1) => String.fromCharCode(p1));
          const lastPosterId = $(cells[7]).find('a[href*=showuser]').attr('href');
          let myturn = (config.username == lastPoster) ? 'Caught Up' : 'Owing';
          if (config.previousposters[thread_id]) {
            myturn = (lastPoster == config.previousposters[thread_id].replace(/&#([0-9]+);/g, (m, p1) => String.fromCharCode(p1))) ? 'Owing' : 'Caught Up';
          }
          const symbol = (myturn == 'Caught Up') ? config.indicators[0] : config.indicators[1];
  
          let postDate = $(cells[7]).html();
          postDate = postDate.substr(0, postDate.indexOf('<br>'));
          const sep = (threadDesc) ? config.separator : '';
          
          if (history) {
            config.historywrap.append($(`<div class="profile--thread ${myturn.replace(/ /g, '').toLowerCase()}" aria-described-by="${myturn}">
                          <div class="profile--thread-border">
                              <div class="profile--thread-marker">
                                      <i class="fa-solid fa-xmark"></i>
                              </div>
                              <a href="${threadLink}">${title}</a>
                              <div class="profile--thread-info">
                                      <a href="topiclist.html">posted in ${location}</a>
                                      <span>${threadDesc}</span>
                                      <span>last post by <a href="${lastPosterId}">${lastPoster}</a></span>
                                      <span>${postDate}</span>
                              </div>
                          </div>
                  </div>`));
          } else if (comm) {
            config.commwrap.append($(`<div class="profile--thread ${myturn.replace(/ /g, '').toLowerCase()}" aria-described-by="${myturn}">
                          <div class="profile--thread-border">
                              <div class="profile--thread-marker">
                                      <i class="fa-solid fa-check"></i>
                                      <i class="fa-solid fa-star"></i>
                              </div>
                              <a href="${threadLink}">${title}</a>
                              <div class="profile--thread-info">
                                      <a href="topiclist.html">posted in ${location}</a>
                                      <span>${threadDesc}</span>
                                      <span>last post by <a href="${lastPosterId}">${lastPoster}</a></span>
                                      <span>${postDate}</span>
                              </div>
                          </div>
                  </div>`));
          } else if (commhistory) {
            config.commwrap.append($(`<div class="profile--thread ${myturn.replace(/ /g, '').toLowerCase()}" aria-described-by="${myturn}">
                          <div class="profile--thread-border">
                              <div class="profile--thread-marker">
                                      <i class="fa-solid fa-xmark"></i>
                              </div>
                              <a href="${threadLink}">${title}</a>
                              <div class="profile--thread-info">
                                      <a href="topiclist.html">posted in ${location}</a>
                                      <span>${threadDesc}</span>
                                      <span>last post by <a href="${lastPosterId}">${lastPoster}</a></span>
                                      <span>${postDate}</span>
                              </div>
                          </div>
                  </div>`));
          } else if (social) {
            config.socialwrap.append($(`<div class="profile--thread ${myturn.replace(/ /g, '').toLowerCase()}" aria-described-by="${myturn}">
                          <div class="profile--thread-border">
                              <div class="profile--thread-marker">
                                      <i class="fa-solid fa-check"></i>
                                      <i class="fa-solid fa-star"></i>
                              </div>
                              <a href="${threadLink}">${title}</a>
                              <div class="profile--thread-info">
                                      <a href="topiclist.html">posted in ${location}</a>
                                      <span>${threadDesc}</span>
                                      <span>last post by <a href="${lastPosterId}">${lastPoster}</a></span>
                                      <span>${postDate}</span>
                              </div>
                          </div>
                  </div>`));
          } else if (socialhistory) {
            config.socialwrap.append($(`<div class="profile--thread ${myturn.replace(/ /g, '').toLowerCase()}" aria-described-by="${myturn}">
                          <div class="profile--thread-border">
                              <div class="profile--thread-marker">
                                      <i class="fa-solid fa-xmark"></i>
                              </div>
                              <a href="${threadLink}">${title}</a>
                              <div class="profile--thread-info">
                                      <a href="topiclist.html">posted in ${location}</a>
                                      <span>${threadDesc}</span>
                                      <span>last post by <a href="${lastPosterId}">${lastPoster}</a></span>
                                      <span>${postDate}</span>
                              </div>
                          </div>
                  </div>`));
          } else if (dev) {
            config.devwrap.append($(`<div class="profile--thread ${myturn.replace(/ /g, '').toLowerCase()}" aria-described-by="${myturn}">
                          <div class="profile--thread-border">
                              <div class="profile--thread-marker">
                                      <i class="fa-solid fa-check"></i>
                                      <i class="fa-solid fa-star"></i>
                              </div>
                              <a href="${threadLink}">${title}</a>
                              <div class="profile--thread-info">
                                      <a href="topiclist.html">posted in ${location}</a>
                                      <span>${threadDesc}</span>
                                      <span>last post by <a href="${lastPosterId}">${lastPoster}</a></span>
                                      <span>${postDate}</span>
                              </div>
                          </div>
                  </div>`));
          } else if (devhistory) {
            config.devwrap.append($(`<div class="profile--thread ${myturn.replace(/ /g, '').toLowerCase()}" aria-described-by="${myturn}">
                          <div class="profile--thread-border">
                              <div class="profile--thread-marker">
                                      <i class="fa-solid fa-xmark"></i>
                              </div>
                              <a href="${threadLink}">${title}</a>
                              <div class="profile--thread-info">
                                      <a href="topiclist.html">posted in ${location}</a>
                                      <span>${threadDesc}</span>
                                      <span>last post by <a href="${lastPosterId}">${lastPoster}</a></span>
                                      <span>${postDate}</span>
                              </div>
                          </div>
                  </div>`));
          } else if (req) {
            config.reqwrap.append($(`<div class="profile--thread ${myturn.replace(/ /g, '').toLowerCase()}" aria-described-by="${myturn}">
                          <div class="profile--thread-border">
                              <div class="profile--thread-marker">
                                      <i class="fa-solid fa-check"></i>
                                      <i class="fa-solid fa-star"></i>
                              </div>
                              <a href="${threadLink}">${title}</a>
                              <div class="profile--thread-info">
                                      <a href="topiclist.html">posted in ${location}</a>
                                      <span>${threadDesc}</span>
                                      <span>last post by <a href="${lastPosterId}">${lastPoster}</a></span>
                                      <span>${postDate}</span>
                              </div>
                          </div>
                  </div>`));
          } else if (reqhistory) {
            config.reqwrap.append($(`<div class="profile--thread ${myturn.replace(/ /g, '').toLowerCase()}" aria-described-by="${myturn}">
                          <div class="profile--thread-border">
                              <div class="profile--thread-marker">
                                      <i class="fa-solid fa-xmark"></i>
                              </div>
                              <a href="${threadLink}">${title}</a>
                              <div class="profile--thread-info">
                                      <a href="topiclist.html">posted in ${location}</a>
                                      <span>${threadDesc}</span>
                                      <span>last post by <a href="${lastPosterId}">${lastPoster}</a></span>
                                      <span>${postDate}</span>
                              </div>
                          </div>
                  </div>`));
          } else {
            config.trackerwrap.append($(`<div class="profile--thread ${myturn.replace(/ /g, '').toLowerCase()}" aria-described-by="${myturn}">
                          <div class="profile--thread-border">
                              <div class="profile--thread-marker">
                                      <i class="fa-solid fa-check"></i>
                                      <i class="fa-solid fa-star"></i>
                              </div>
                              <a href="${threadLink}">${title}</a>
                              <div class="profile--thread-info">
                                      <a href="topiclist.html">posted in ${location}</a>
                                      <span>${threadDesc}</span>
                                      <span>last post by <a href="${lastPosterId}">${lastPoster}</a></span>
                                      <span>${postDate}</span>
                              </div>
                          </div>
                  </div>`));
          }
        }
      }
  
    });
  
    if ($('#search-topics .tablebasic > tbody > tr', doc).length == 26 && page < config.pagelimit) {
      page = page + 1;
      await parseResults(searchlink, config, page)
    } else {
      if (!config.trackerwrap.children().length) {
        config.trackerwrap.append($('<div class="profile--nothreads">No results found.</div>'));
      }
      if (!config.historywrap.children().length) {
        config.historywrap.append($('<div class="profile--nothreads">No results found.</div>'));
      }
      if (!config.commwrap.children().length) {
        config.commwrap.append($('<div class="profile--nothreads">No results found.</div>'));
      }
      if (!config.socialwrap.children().length) {
        config.socialwrap.append($('<div class="profile--nothreads">No results found.</div>'));
      }
      if (!config.devwrap.children().length) {
        config.devwrap.append($('<div class="profile--nothreads">No results found.</div>'));
      }
      if (!config.reqwrap.children().length) {
        config.reqwrap.append($('<div class="profile--nothreads">No results found.</div>'));
      }
    }
  }