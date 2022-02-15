/** auto-tracker code by FizzyElf - https://fizzyelf.jcink.net **/
async function FillTracker(username, params = {}) {

  /***  CONFIGURATION AREA ***/
  const config = {
    includedforums: (params.includeCategoryIds || []).map(x => "c_" + x).concat(params.includeForumIds || []),
    altforums: params.altForumNames || [],
    altforumids: params.altForumIds || [],
    commforums: params.commForumNames || [],
    commforumids: params.commForumIds || [],
    devforums: params.commForumNames || [],
    devforumids: params.commForumIds || [],
    wantedforums: params.commForumNames || [],
    wantedforumids: params.commForumIds || [],
    ignoreforums: params.ignoreForumNames || [],
    ignoreforumids: params.ignoreForumIds || [],
    lockedclass: params.lockedMacroIdentifier || "[title=Closed]",
    lockedforums: params.archiveForumNames || [],
    lockedforumids: params.archiveForumIds || [],
    indicators: params.indicators || ['<span style="font-family: roboto, verdana, arial, sans">ÃƒÂ¢Ã…â€œÃ¢â‚¬Å“</span>', '<span style="font-family: roboto, verdana, arial, sans">ÃƒÂ¢Ã…Â¾Ã‚Â¤</span>'],
    separator: params.separator || "|",
    username: username.replace(/&#([0-9]+);/g, (m, p1) => String.fromCharCode(p1)),
    trackerwrap: params.thisTracker || $('#trackerwrap'),
    altwrap: params.thisAltTracker || $('#altwrap'),
    historywrap: params.thisHistory || $('#historywrap'),
    althistorywrap: params.thisAltHistory || $('#althistorywrap'),
    commwrap: params.thisCommTracker || $('#commwrap'),
    commhistorywrap: params.thisCommHistory || $('#commhistorywrap'),
    devwrap: params.thisDevTracker || $('#devwrap'),
    wantedwrap: params.thisDevTracker || $('#wantedwrap'),
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
    config.trackerwrap.append('<div class="tracker--item fullWidth"><div class="tracker--body">Search Failed</div></div>');
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
    config.trackerwrap.append(`<div class="tracker--item fullWidth"><div class="tracker--body">${boardmessage}</div></div>`);
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
    config.trackerwrap.append('<div class="tracker--item fullWidth"><div class="tracker--body">Search Failed</div></div>');
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
        const au = config.altforums.includes(location) || config.altforumids.includes(location_id);
        const comm = config.commforums.includes(location) || config.commforumids.includes(location_id);
        const dev = config.devforums.includes(location) || config.devforumids.includes(location_id);
        const wanted = config.wantedforums.includes(location) || config.wantedforumids.includes(location_id);
        const lastPoster = $(cells[7]).find('a[href*=showuser]').text().trim().replace(/&#([0-9]+);/g, (m, p1) => String.fromCharCode(p1));
        const lastPosterId = $(cells[7]).find('a[href*=showuser]').attr('href');
        let myturn = (config.username == lastPoster) ? 'Caught Up' : 'My Turn';
        if (config.previousposters[thread_id]) {
          myturn = (lastPoster == config.previousposters[thread_id].replace(/&#([0-9]+);/g, (m, p1) => String.fromCharCode(p1))) ? 'My Turn' : 'Caught Up';
        }
        const symbol = (myturn == 'Caught Up') ? config.indicators[0] : config.indicators[1];

        let postDate = $(cells[7]).html();
        postDate = postDate.substr(0, postDate.indexOf('<br>'));
        const sep = (threadDesc) ? config.separator : '';

        if (au) {
          if(locked) {
            config.altwrap.append($(`<div class="tracker--item au closed">
                                  <div class="tracker--status ${myturn.replace(/ /g, '').toLowerCase()}" aria-described-by="${myturn}"></div>
                                  <div class="tracker--body">
                                      <a href="${threadLink}" class="tracker--link">${title}</a>
                                      <div class="tracker--desc">
                                          <span class="tracker--fact">posted in ${location}</span>
                                          <span class="tracker--fact">${threadDesc}</span>
                                      </div>
                                      <div class="tracker--latest">
                                          last post written by <a href="${lastPosterId}">${lastPoster}</a><br>
                                          posted ${postDate}
                                      </div>
                                  </div>
                              </div>`));
          } else {
            config.altwrap.append($(`<div class="tracker--item au">
                                  <div class="tracker--status ${myturn.replace(/ /g, '').toLowerCase()}" aria-described-by="${myturn}"></div>
                                  <div class="tracker--body">
                                      <a href="${threadLink}" class="tracker--link">${title}</a>
                                      <div class="tracker--desc">
                                          <span class="tracker--fact">posted in ${location}</span>
                                          <span class="tracker--fact">${threadDesc}</span>
                                      </div>
                                      <div class="tracker--latest">
                                          last post written by <a href="${lastPosterId}">${lastPoster}</a><br>
                                          posted ${postDate}
                                      </div>
                                  </div>
                              </div>`));
          }
        } else if (comm) {
          if(locked) {
            config.commhistorywrap.append($(`<div class="tracker--item comm closed">
                                  <div class="tracker--status ${myturn.replace(/ /g, '').toLowerCase()}" aria-described-by="${myturn}"></div>
                                  <div class="tracker--body">
                                      <a href="${threadLink}" class="tracker--link">${title}</a>
                                      <div class="tracker--desc">
                                          <span class="tracker--fact">posted in ${location}</span>
                                          <span class="tracker--fact">${threadDesc}</span>
                                      </div>
                                      <div class="tracker--latest">
                                          last post written by <a href="${lastPosterId}">${lastPoster}</a><br>
                                          posted ${postDate}
                                      </div>
                                  </div>
                              </div>`));
          } else {
            config.commwrap.append($(`<div class="tracker--item comm">
                                  <div class="tracker--status ${myturn.replace(/ /g, '').toLowerCase()}" aria-described-by="${myturn}"></div>
                                  <div class="tracker--body">
                                      <a href="${threadLink}" class="tracker--link">${title}</a>
                                      <div class="tracker--desc">
                                          <span class="tracker--fact">posted in ${location}</span>
                                          <span class="tracker--fact">${threadDesc}</span>
                                      </div>
                                      <div class="tracker--latest">
                                          last post written by <a href="${lastPosterId}">${lastPoster}</a><br>
                                          posted ${postDate}
                                      </div>
                                  </div>
                              </div>`));
          }
        } else if (dev) {
          config.devwrap.append($(`<div class="tracker--item dev">
                                  <div class="tracker--status></div>
                                  <div class="tracker--body">
                                      <a href="${threadLink}" class="tracker--link">${title}</a>
                                      <div class="tracker--desc">
                                          <span class="tracker--fact">posted in ${location}</span>
                                          <span class="tracker--fact">${threadDesc}</span>
                                      </div>
                                      <div class="tracker--latest">
                                          last post written by <a href="${lastPosterId}">${lastPoster}</a><br>
                                          posted ${postDate}
                                      </div>
                                  </div>
                              </div>`));
        } else if (wanted) {
          config.wantedwrap.append($(`<div class="tracker--item wanted">
                                  <div class="tracker--status></div>
                                  <div class="tracker--body">
                                      <a href="${threadLink}" class="tracker--link">${title}</a>
                                      <div class="tracker--desc">
                                          <span class="tracker--fact">posted in ${location}</span>
                                          <span class="tracker--fact">${threadDesc}</span>
                                      </div>
                                      <div class="tracker--latest">
                                          last post written by <a href="${lastPosterId}">${lastPoster}</a><br>
                                          posted ${postDate}
                                      </div>
                                  </div>
                              </div>`));
        } else {
          if(locked) {
            config.historywrap.append($(`<div class="tracker--item closed">
                                  <div class="tracker--status closed" aria-described-by="Closed"></div>
                                  <div class="tracker--body">
                                      <a href="${threadLink}" class="tracker--link">${title}</a>
                                      <div class="tracker--desc">
                                          <span class="tracker--fact">posted in ${location}</span>
                                          <span class="tracker--fact">${threadDesc}</span>
                                      </div>
                                      <div class="tracker--latest">
                                          last post written by <a href="${lastPosterId}">${lastPoster}</a><br>
                                          posted ${postDate}
                                      </div>
                                  </div>
                              </div>`));
          } else {
            config.trackerwrap.append($(`<div class="tracker--item">
                                  <div class="tracker--status ${myturn.replace(/ /g, '').toLowerCase()}" aria-described-by="${myturn}"></div>
                                  <div class="tracker--body">
                                      <a href="${threadLink}" class="tracker--link">${title}</a>
                                      <div class="tracker--desc">
                                          <span class="tracker--fact">posted in ${location}</span>
                                          <span class="tracker--fact">${threadDesc}</span>
                                      </div>
                                      <div class="tracker--latest">
                                          last post written by <a href="${lastPosterId}">${lastPoster}</a><br>
                                          posted ${postDate}
                                      </div>
                                  </div>
                              </div>`));
          }
        }
      }
    }

  });

  if ($('#search-topics .tablebasic > tbody > tr', doc).length == 26 && page < config.pagelimit) {
    page = page + 1;
    await parseResults(searchlink, config, page)
  } else {
    if (!config.trackerwrap.children().length) {
      config.trackerwrap.append($('<div class="tracker--item fullWidth"><div class="tracker--body">None</div></div>'));
    }
    if (!config.historywrap.children().length) {
      config.historywrap.append($('<div class="tracker--item fullWidth"><div class="tracker--body">None</div></div>'));
    }
    if (!config.commwrap.children().length) {
      config.commwrap.append($('<div class="tracker--item fullWidth"><div class="tracker--body">None</div></div>'));
    }
    if (!config.commhistorywrap.children().length) {
      config.commhistorywrap.append($('<div class="tracker--item fullWidth"><div class="tracker--body">None</div></div>'));
    }
    if (!config.altwrap.children().length) {
      config.altwrap.append($('<div class="tracker--item fullWidth"><div class="tracker--body">None</div></div>'));
    }
    if (!config.althistorywrap.children().length) {
      config.althistorywrap.append($('<div class="tracker--item fullWidth"><div class="tracker--body">None</div></div>'));
    }
    if (!config.devwrap.children().length) {
      config.devwrap.append($('<div class="tracker--item fullWidth"><div class="tracker--body">None</div></div>'));
    }
    if (!config.wantedwrap.children().length) {
      config.wantedwrap.append($('<div class="tracker--item fullWidth"><div class="tracker--body">None</div></div>'));
    }
  }
}