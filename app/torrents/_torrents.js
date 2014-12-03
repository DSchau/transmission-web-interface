angular.module('transmission.torrents', [
  'transmission.torrents.services',
  'transmission.torrents.filters',
  'transmission.common.constants',
])
.constant('TORRENTS', [
  { 
    title: 'Ted.2012.UNRATED.720p.BluRay.DTS.x264-HiDt',
    completed: true
  },
  { 
    title: 'Drake - 6 God (2014) - WEB 320',
    downloading: true,
    progress: '0.5'
  },
  { 
    title: 'Drake - Heat Of The Moment (2014) - WEB 320',
    downloading: true,
    progress: '0.325'
  },
  { 
    title: 'Drake - How About Now (2014) - WEB 320',
    downloading: true,
    progress: '0.375'
  },
  { 
    title: 'Drake - Days In The East (Single) (2014) [WEB-320]',
    downloading: true,
    progress: '0.725'
  },
  { 
    title: 'Big Sean - I Don\'t Fuck With You (320)',
    downloading: true,
    progress: '0.925'
  },
  { 
    title: 'Big Sean - Paradise (2014) [LAME MP3]',
    downloading: true,
    progress: '0.99999'
  },
  { 
    title: 'Hello.Ladies-The.Movie.720p.HDTV.x264-BATV.mkv',
    completed: true
  },
  { 
    title: 'Dawn.of.the.Planet.of.the.Apes.2014.720p.BluRay.DTS.x264-decibeL.mkv',
    completed: true
  },
  { 
    title: 'The.Soup.2014.11.26.720p.HDTV.x264-NTb.mkv',
    completed: true
  },
  { 
    title: 'Gotham.S01E10.720p.HDTV.X264-DIMENSION.mkv',
    completed: true
  },
  { 
    title: 'The.Walking.Dead.S05E07.720p.WEB-DL.DD5.1.H.264-Cyphanix.mkv',
    completed: true
  },
  { 
    title: 'The.Walking.Dead.S05E07.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Homeland.S04E09.There\'s.Something.Else.Going.On.720p.WEB-DL.DD5.1.H.264-BS.mkv',
    completed: true
  },
  { 
    title: 'Brooklyn.Nine-Nine.S02E08.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'South.Park.S18E08.Cock.Magic.720p.WEB-DL.AAC2.0.H.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'The.League.S06E13.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv',
    completed: true
  },
  { 
    title: 'The.League.S06E12.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv',
    completed: true
  },
  { 
    title: 'The.League.S06E12.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'the.soup.2014.11.19.720p.hdtv.x264-w4f.mkv',
    completed: true
  },
  { 
    title: 'The.League.S06E13.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'South.Park.S18E08.720p.HDTV.X264-DIMENSION.mkv',
    completed: true
  },
  { 
    title: 'Guardians.of.the.Galaxy.2014.720p.BluRay.x264-SPARKS',
    completed: true
  },
  { 
    title: 'Gotham.S01E09.720p.HDTV.X264-DIMENSION.mkv',
    completed: true
  },
  { 
    title: 'The.Walking.Dead.S05E06.720p.WEB-DL.DD5.1.H.264-Cyphanix.mkv',
    completed: true
  },
  { 
    title: 'The.Walking.Dead.S05E06.720p.HDTV.X264-DIMENSION.mkv',
    completed: true
  },
  { 
    title: 'Anthony.Bourdain.Parts.Unknown.S04E08.Jamaica.720p.HDTV.x264-DHD.mkv',
    completed: true
  },
  { 
    title: 'Brooklyn.Nine-Nine.S02E07.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Homeland.S04E08.Halfway.to.a.Donut.720p.WEB-DL.DD5.1.H.264-BS.mkv',
    completed: true
  },
  { 
    title: 'South.Park.S18E07.Grounded.Vindaloop.720p.WEB-DL.AAC2.0.H.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'The.League.S06E11.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv',
    completed: true
  },
  { 
    title: 'the.soup.2014.11.12.720p.hdtv.x264-w4f.mkv',
    completed: true
  },
  { 
    title: 'The.League.S06E11.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'South.Park.S18E07.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Big K.R.I.T. - Cadillactica (320)',
    completed: true
  },
  { 
    title: 'Gotham.S01E08.720p.HDTV.X264-DIMENSION.mkv',
    completed: true
  },
  { 
    title: 'The.Walking.Dead.S05E05.720p.WEB-DL.DD5.1.H.264-Cyphanix.mkv',
    completed: true
  },
  { 
    title: 'Last.Week.Tonight.With.John.Oliver.S01E24.HDTV.x264-BATV.mp4',
    completed: true
  },
  { 
    title: 'Anthony.Bourdain.Parts.Unknown.S04E07.Massachusetts.720p.HDTV.x264-DHD',
    completed: true
  },
  { 
    title: 'The.Walking.Dead.S05E05.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Brooklyn.Nine-Nine.S02E06.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Homeland.S04E07.Redux.720p.WEB-DL.DD5.1.H.264-BS.mkv',
    completed: true
  },
  { 
    title: 'South.Park.S18E06.Freemium.Isnt.Free.720p.WEB-DL.AAC2.0.H.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'The.League.S06E10.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv',
    completed: true
  },
  { 
    title: 'the.soup.2014.11.05.720p.hdtv.x264-w4f.mkv',
    completed: true
  },
  { 
    title: 'South.Park.S18E06.720p.HDTV.X264-DIMENSION.mkv',
    completed: true
  },
  { 
    title: 'The.League.S06E10.720p.HDTV.X264-DIMENSION.mkv',
    completed: true
  },
  { 
    title: 'Gotham.S01E07.720p.HDTV.X264-DIMENSION.mkv',
    completed: true
  },
  { 
    title: 'The.Walking.Dead.S05E04.720p.WEB-DL.DD5.1.H.264-Cyphanix.mkv',
    completed: true
  },
  { 
    title: 'Last.Week.Tonight.With.John.Oliver.S01E23.720p.HDTV.x264-BATV.mkv',
    completed: true
  },
  { 
    title: 'Homeland.S04E06.From.A.To.B.And.Back.Again.720p.WEB-DL.DD5.1.H.264-BS.mkv',
    completed: true
  },
  { 
    title: 'Anthony.Bourdain.Parts.Unknown.S04E06.Iran.720p.HDTV.x264-DHD.mkv',
    completed: true
  },
  { 
    title: 'The.Walking.Dead.S05E04.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Homeland.S04E06.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Brooklyn.Nine-Nine.S02E05.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'South.Park.S18E05.The.Magic.Bush.720p.WEB-DL.AAC2.0.H.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'The.League.S06E09.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv',
    completed: true
  },
  { 
    title: 'the.soup.2014.10.29.720p.hdtv.x264-w4f.mkv',
    completed: true
  },
  { 
    title: 'South.Park.S18E05.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'The.League.S06E09.720p.HDTV.X264-DIMENSION.mkv',
    completed: true
  },
  { 
    title: 'Source.Code.2011.720p.BluRay.DTS.x264-HiDt.mkv',
    completed: true
  },
  { 
    title: 'Boardwalk.Empire.S05E08.720p.HDTV.DD5.1.x264-DON.mkv',
    completed: true
  },
  { 
    title: 'Gotham.S01E06.720p.HDTV.X264-DIMENSION.mkv',
    completed: true
  },
  { 
    title: 'The.League.S06E08.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv',
    completed: true
  },
  { 
    title: 'The.Walking.Dead.S05E03.720p.WEB-DL.DD5.1.H.264-Cyphanix.mkv',
    completed: true
  },
  { 
    title: 'Last.Week.Tonight.With.John.Oliver.S01E22.HDTV.x264-BATV.mp4',
    completed: true
  },
  { 
    title: 'Boardwalk.Empire.S05E08.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Anthony.Bourdain.Parts.Unknown.S04E05.Tanzania.720p.HDTV.x264-DHD.mkv',
    completed: true
  },
  { 
    title: 'The.Walking.Dead.S05E03.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Homeland.S04E05.About.A.Boy.720p.WEB-DL.DD5.1.H.264-BS.mkv',
    completed: true
  },
  { 
    title: 'Indiana Jones and the Last Crusade 1989 720p BluRay DD5.1 x264-EbP',
    completed: true
  },
  { 
    title: 'Brooklyn.Nine-Nine.S02E01.720p.WEB-DL.DD5.1.H.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'Brooklyn.Nine-Nine.S02E02.720p.WEB-DL.DD5.1.H.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'Run The Jewels 2',
    completed: true
  },
  { 
    title: 'the.soup.2014.10.22.720p.hdtv.x264-w4f.mkv',
    completed: true
  },
  { 
    title: 'The.League.S06E08.720p.HDTV.X264-DIMENSION.mkv',
    completed: true
  },
  { 
    title: 'Boardwalk.Empire.S05E07.720p.HDTV.DD5.1.x264-DON.mkv',
    completed: true
  },
  { 
    title: 'Boardwalk.Empire.S05E00.The.Final.Shot-A.Farewell.to.Boardwalk.Empire.HDTV.x264-BATV.mp4',
    completed: true
  },
  { 
    title: 'Boardwalk.Empire.S05E00.The.Final.Shot-A.Farewell.to.Boardwalk.Empire.HDTV.x264-BATV',
    completed: true
  },
  { 
    title: 'Gotham.S01E05.720p.HDTV.X264-DIMENSION.mkv',
    completed: true
  },
  { 
    title: 'The.League.S06E07.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv',
    completed: true
  },
  { 
    title: 'The.Walking.Dead.S05E02.720p.WEB-DL.DD5.1.H.264-Cyphanix.mkv',
    completed: true
  },
  { 
    title: 'Battlestar.Galactica.S01.720p.BluRay.DTS.x264-EPiK',
    completed: true
  },
  { 
    title: 'Last.Week.Tonight.With.John.Oliver.S01E21.720p.HDTV.x264-BATV.mkv',
    completed: true
  },
  { 
    title: 'The.Walking.Dead.S05E02.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Anthony.Bourdain.Parts.Unknown.S04E04.Vietnam.720p.HDTV.x264-DHD.mkv',
    completed: true
  },
  { 
    title: 'Brooklyn.Nine-Nine.S02E04.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Homeland.S04E04.Iron.In.The.Fire.720p.WEB-DL.DD5.1.H.264-BS.mkv',
    completed: true
  },
  { 
    title: 'Logic-Under_Pressure-(Deluxe_Edition)-2014-CR',
    completed: true
  },
  { 
    title: 'Logic - Young Sinatra Undeniable (DatPiff.com)',
    completed: true
  },
  { 
    title: 'the.soup.2014.10.15.720p.hdtv.x264-w4f.mkv',
    completed: true
  },
  { 
    title: 'The.League.S06E07.720p.HDTV.X264-DIMENSION.mkv',
    completed: true
  },
  { 
    title: 'South.Park.S18E04.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Gotham.S01E04.720p.HDTV.X264-DIMENSION.mkv',
    completed: true
  },
  { 
    title: 'The.Walking.Dead.S05E01.720p.WEB-DL.DD5.1.H.264-Cyphanix.mkv',
    completed: true
  },
  { 
    title: 'Anthony.Bourdain.Parts.Unknown.S04E03.Paraguay.720p.HDTV.x264-DHD.mkv',
    completed: true
  },
  { 
    title: 'Brooklyn.Nine-Nine.S02E03.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Homeland.S04E03.Shalwar.Kameez.720p.WEB-DL.DD5.1.H.264-BS.mkv',
    completed: true
  },
  { 
    title: 'South.Park.S18E03.The.Cissy.720p.WEB-DL.AAC2.0.H.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'R. Kelly - 12 Play (1993) V0',
    completed: true
  },
  { 
    title: 'R. Kelly - Chocolate Factory (2003)',
    completed: true
  },
  { 
    title: 'Nelly - Da Derrty Version - The Reinvention (2003) V0',
    completed: true
  },
  { 
    title: 'Logic - Under Pressure (2014) [AAC 256]',
    completed: true
  },
  { 
    title: 'Vince Staples - Hell Can Wait (2014) - WEB 320',
    completed: true
  },
  { 
    title: 'Ginuwine - Pony [Single] 1996 [MP3-320]',
    completed: true
  },
  { 
    title: 'Alt-J - This Is All Yours (320)',
    completed: true
  },
  { 
    title: 'Aphex Twin - Syro (2014) [320]',
    completed: true
  },
  { 
    title: 'The.League.S06E06.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv',
    completed: true
  },
  { 
    title: 'the.soup.2014.10.08.720p.hdtv.x264-w4f.mkv',
    completed: true
  },
  { 
    title: 'South.Park.S18E03.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Review.S01.720p.WEB-DL.AAC2.0.H.264-BTN',
    completed: true
  },
  { 
    title: 'Boardwalk.Empire.S05E05.720p.HDTV.DD5.1.x264-DON.mkv',
    completed: true
  },
  { 
    title: 'Trent Reznor & Atticus Ross - Gone Girl (Soundtrack from the Motion Picture) (2014) - WEB 320',
    completed: true
  },
  { 
    title: 'Gotham S01E03 720p HDTV DD5.1 x264-CtrlHD.mkv',
    completed: true
  },
  { 
    title: 'Last.Week.Tonight.With.John.Oliver.S01E20.720p.HDTV.x264-BATV.mkv',
    completed: true
  },
  { 
    title: 'Anthony.Bourdain.Parts.Unknown.S04E02.The.Bronx.720p.HDTV.x264-DHD.mkv',
    completed: true
  },
  { 
    title: 'mulaney.s01e01.720p.hdtv.x264-2hd.mkv',
    completed: true
  },
  { 
    title: 'Homeland.S04E02.Trylon.and.Perisphere.720p.WEB-DL.DD5.1.H.264-BS.mkv',
    completed: true
  },
  { 
    title: 'Homeland.S04E01.Drone.Queen.720p.WEB-DL.DD5.1.H.264-BS.mkv',
    completed: true
  },
  { 
    title: 'South.Park.S18E02.Gluten.Free.Ebola.720p.WEB-DL.AAC2.0.H.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'The.League.S06E05.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv',
    completed: true
  },
  { 
    title: 'the.soup.2014.10.01.720p.hdtv.x264-w4f.mkv',
    completed: true
  },
  { 
    title: 'South.Park.S18E02.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Boardwalk.Empire.S05E04.720p.HDTV.DD5.1.x264-DON.mkv',
    completed: true
  },
  { 
    title: 'Gotham.S01E02.720p.HDTV.X264-DIMENSION.mkv',
    completed: true
  },
  { 
    title: 'Last.Week.Tonight.With.John.Oliver.S01E19.720p.HDTV.x264-BATV.mkv',
    completed: true
  },
  { 
    title: 'Anthony.Bourdain.Parts.Unknown.S04E01.Shanghai.720p.HDTV.x264-DHD.mkv',
    completed: true
  },
  { 
    title: 'Anthony.Bourdain.Parts.Unknown.S04E00.Prime.Cuts.Season.3.720p.HDTV.x264-DHD.mkv',
    completed: true
  },
  { 
    title: 'South.Park.S18E01.Go.Fund.Yourself.720p.WEB DL.AAC2.0.H.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'The.Worlds.End.2013.576p.BDRip.x264-HANDJOB.mkv',
    completed: true
  },
  { 
    title: 'South.Park.S18E01.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'The.League.S06E04.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv',
    completed: true
  },
  { 
    title: 'the.soup.2014.09.24.720p.hdtv.x264-w4f.mkv',
    completed: true
  },
  { 
    title: 'Boardwalk.Empire.S05E03.720p.HDTV.DD5.1.x264-DON.mkv',
    completed: true
  },
  { 
    title: 'Gotham.S01E01.720p.HDTV.X264-DIMENSION.mkv',
    completed: true
  },
  { 
    title: 'Last.Week.Tonight.With.John.Oliver.S01E18.720p.HDTV.x264-BATV.mkv',
    completed: true
  },
  { 
    title: 'Burn.After.Reading.2008.720p.BluRay.x264-EbP.mkv',
    completed: true
  },
  { 
    title: 'The.League.S06E03.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv',
    completed: true
  },
  { 
    title: 'The.Soup.2014.09.17.720p.HDTV.x264-TTVa.mkv',
    completed: true
  },
  { 
    title: 'Big Sean - Hall Of Fame (2013) [320]',
    completed: true
  },
  { 
    title: 'Boardwalk.Empire.S05E02.720p.HDTV.DD5.1.x264-DON.mkv',
    completed: true
  },
  { 
    title: 'Last.Week.Tonight.With.John.Oliver.S01E17.720p.HDTV.x264-BATV.mkv',
    completed: true
  },
  { 
    title: 'Boardwalk.Empire.S05E01.REPACK.720p.HDTV.DD5.1.x264-DON.mkv',
    completed: true
  },
  { 
    title: 'The.League.S06E02.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv',
    completed: true
  },
  { 
    title: 'the.soup.2014.09.10.720p.hdtv.x264-w4f.mkv',
    completed: true
  },
  { 
    title: 'Three.Kings.1999.576p.BDRip.x264-HANDJOB.mkv',
    completed: true
  },
  { 
    title: 'Neighbors.2014.720p.BluRay.AC3.x264-HaB',
    completed: true
  },
  { 
    title: 'Forgetting.Sarah.Marshall.2008.Unrated.720p.BluRay.DD5.1-EbP',
    completed: true
  },
  { 
    title: 'The.Leftovers.S01E10.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Last.Week.Tonight.With.John.Oliver.S01E16.720p.HDTV.x264-BATV.mkv',
    completed: true
  },
  { 
    title: 'Intruders.S01E03.Time.Has.Come.Today.720p.WEB-DL.AAC2.0.H.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'The.League.S06E01.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv',
    completed: true
  },
  { 
    title: 'The.Soup.2014.09.03.720p.HDTV.x264-TTVa.mkv',
    completed: true
  },
  { 
    title: 'RATKING - So It Goes (2014) [MP3 320]',
    completed: true
  },
  { 
    title: 'Nas - It Was Written',
    completed: true
  },
  { 
    title: 'Nas - Stillmatic (320)',
    completed: true
  },
  { 
    title: 'Nas - I Am (Retail) (1999)',
    completed: true
  },
  { 
    title: 'the.soup.2014.08.27.720p.hdtv.x264-w4f.mkv',
    completed: true
  },
  { 
    title: 'The.Leftovers.S01E09.720p.HDTV.DD5.1.x264.mkv',
    completed: true
  },
  { 
    title: 'intruders.s01e01.720p.hdtv.x264-2hd.mkv',
    completed: true
  },
  { 
    title: 'Intruders.S01E02.720p.HDTV.x264-BATV.mkv',
    completed: true
  },
  { 
    title: 'Iggy Azalea - The New Classic 2014 (320)',
    completed: true
  },
  { 
    title: 'Suits.S04E10.720p.WEB-DL.DD5.1.H.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'hard.knocks.s09e03.720p.hdtv.x264-finch.mkv',
    completed: true
  },
  { 
    title: 'The.Soup.2014.08.20.720p.HDTV.x264-TTVa.mkv',
    completed: true
  },
  { 
    title: 'Tyrant.S01E09.720p.HDTV.x264-IMMERSE.mkv',
    completed: true
  },
  { 
    title: 'Last.Week.Tonight.With.John.Oliver.S01E15.720p.HDTV.x264-BATV.mkv',
    completed: true
  },
  { 
    title: 'The.Leftovers.S01E08.720p.HDTV.x264-IMMERSE.mkv',
    completed: true
  },
  { 
    title: 'Suits.S04E09.PROPER.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'the.soup.2014.08.13.720p.hdtv.x264-w4f.mkv',
    completed: true
  },
  { 
    title: 'hard.knocks.902.720p.hdtv.x264-sys.mkv',
    completed: true
  },
  { 
    title: 'Tyrant.S01E08.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Run The Jewels [2013] [320]',
    completed: true
  },
  { 
    title: 'Hard.Knocks.S09E01.720p.HDTV.x264-BTN.mkv',
    completed: true
  },
  { 
    title: 'The.Leftovers.S01E07.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Young Thug, A$AP Ferg & Freddie Gibbs - Old English (2014) - WEB MP3 320',
    completed: true
  },
  { 
    title: 'Terminator.2.Judgment.Day.Skynet.Edition.1991.Bluray.720P.X264.DTS-HDChina',
    completed: true
  },
  { 
    title: 'A.Few.Good.Men.1992.576p.BDRip.x264-HANDJOB',
    completed: true
  },
  { 
    title: 'Suits.S04E08.720p.WEB-DL.DD5.1.H.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'the.soup.2014.08.06.720p.hdtv.x264-w4f.mkv',
    completed: true
  },
  { 
    title: 'Suits.S04E08.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Tyrant.S01E07.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'The.Sopranos.S03.720p.WEB-DL.DD5.1.h.264-BTN',
    completed: true
  },
  { 
    title: 'Riddick.2013.Unrated.DC.720p.BluRay.DTS.x264-HiDt',
    completed: true
  },
  { 
    title: 'Penny.Dreadful.S01E01.720p.HDTV.DD5.1.x264-NTb.mkv',
    completed: true
  },
  { 
    title: 'Last.Week.Tonight.With.John.Oliver.S01E13.HDTV.x264-BATV.mp4',
    completed: true
  },
  { 
    title: 'The.Leftovers.S01E06.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Rise.of.the.Planet.of.the.Apes.2011.720p.BluRay.DTS.x264-HiDt',
    completed: true
  },
  { 
    title: 'Elysium.2013.720p.BluRay.DTS.x264-HDMaNiAcS',
    completed: true
  },
  { 
    title: 'Captain.America.The.Winter.Soldier.2014.720p.BluRay.DTS.x264-HiDt',
    completed: true
  },
  { 
    title: 'Suits.S04E07.720p.WEB-DL.DD5.1.H.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'the.soup.2014.07.30.720p.hdtv.x264-w4f.mkv',
    completed: true
  },
  { 
    title: 'Suits.S04E07.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Tyrant.S01E06.720p.HDTV.x264-IMMERSE.mkv',
    completed: true
  },
  { 
    title: 'The.Leftovers.S01E05.720p.HDTV.x264-KILLERS.mkv',
    completed: true
  },
  { 
    title: 'Top.Gear.Burma.Special.2014.720p.BluRay.FLAC.2.0.x264-NTb.mkv',
    completed: true
  },
  { 
    title: 'Suits.S04E06.720p.WEB-DL.DD5.1.H.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'the.soup.2014.07.23.720p.hdtv.x264-w4f.mkv',
    completed: true
  },
  { 
    title: 'Tyrant.S01E05.720p.HDTV.x264-IMMERSE.mkv',
    completed: true
  },
  { 
    title: 'Last.Week.Tonight.With.John.Oliver.S01E11.720p.HDTV.x264-BATV.mkv',
    completed: true
  },
  { 
    title: 'Orphan.Black.S02.720p.BluRay.x264-DEMAND',
    completed: true
  },
  { 
    title: 'The.Lego.Movie.2014.720p.BluRay.DD5.1.x264-HiFi.mkv',
    completed: true
  },
  { 
    title: 'Suits.S04E05.720p.WEB-DL.DD5.1.H.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'Suits.S04E05.720p.HDTV.x264-KILLERS',
    completed: true
  },
  { 
    title: 'The Leftovers S01E03 720p HDTV DD5.1 x264-CtrlHD.mkv',
    completed: true
  },
  { 
    title: 'Suits.S04E04.720p.HDTV.x264-KILLERS',
    completed: true
  },
  { 
    title: 'Ab-Soul - These Days... (2014) [320]',
    completed: true
  },
  { 
    title: 'Suits.S04E03.720p.WEB-DL.DD5.1.H.264-NTb.mkv',
    completed: true
  },
  { 
    title: '48.Hrs.1982.720p.BluRay.DTS.x264-decibeL.mkv',
    completed: true
  },
  { 
    title: 'Idle',
    completed: true
  },
  { 
    title: 'Breaking.Bad.S01.720p.BluRay.x264.DTS-WiKi',
    completed: true
  },
  { 
    title: 'Game of Thrones S02 720p BluRay x264 EbP',
    completed: true
  },
  { 
    title: 'House.of.Cards.S02.2013.BluRay.720p.x264.DTS-HDWinG',
    completed: true
  },
  { 
    title: 'Suits.S04E02.720p.WEB-DL.DD5.1.H.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'Game.of.Thrones.S04E10.720p.HDTV.DD5.1.x264-DON.mkv',
    completed: true
  },
  { 
    title: 'Training.Day.2001.720p.BluRay.DTS.x264-CRiSC',
    completed: true
  },
  { 
    title: 'Jack White - Lazaretto (2014) - CD MP3 320',
    completed: true
  },
  { 
    title: 'Suits.S04E01.720p.WEB-DL.DD5.1.H.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'Anthony.Bourdain.Parts.Unknown.S03E08.Brazil.720p.HDTV.x264-DHD',
    completed: true
  },
  { 
    title: '50 Cent - Animal Ambition An Untamed Desire to Win - 2014 320',
    completed: true
  },
  { 
    title: 'Silicon Valley S01E08 720p HDTV DD5.1 x264-CtrlHD.mkv',
    completed: true
  },
  { 
    title: 'Anthony.Bourdain.Parts.Unknown.S03E07.Thailand.720p.HDTV.x264-DHD',
    completed: true
  },
  { 
    title: 'True.Detective.S01.720p.BluRay.x264.DTS-WiKi',
    completed: true
  },
  { 
    title: 'El-P - 2004 - High Water - 320',
    completed: true
  },
  { 
    title: 'HS87 - We The Plug (2014) [320 kbps]',
    completed: true
  },
  { 
    title: 'Anthony.Bourdain.Parts.Unknown.S03E06.Mississippi.Delta.720p.HDTV.x264-W4F',
    completed: true
  },
  { 
    title: 'Mad.Men.S07E07.Waterloo.720p.WEB-DL.DD5.1.h.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'Hannibal.S02.720p.WEB-DL.DD5.1.H.264-NTb',
    completed: true
  },
  { 
    title: 'Anthony.Bourdain.Parts.Unknown.S03E05.Russia.720p.HDTV.x264-W4F',
    completed: true
  },
  { 
    title: 'Silicon Valley S01E07 720p HDTV DD5.1 x264-CtrlHD.mkv',
    completed: true
  },
  { 
    title: 'Mad.Men.S07E06.The.Strategy.720p.WEB-DL.DD5.1.h.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'Mad.Men.S07E06.720p.HDTV.X264-DIMENSION.mkv',
    completed: true
  },
  { 
    title: 'The Black Keys - Turn Blue (2014) - CD MP3 320',
    completed: true
  },
  { 
    title: 'Forrest.Gump.1994.720p.BluRay.DTS.x264-ESiR.mkv',
    completed: true
  },
  { 
    title: 'Sherlock.Holmes.2009.720p.BluRay.DTS.x264-ESiR',
    completed: true
  },
  { 
    title: 'Die.Hard.2.1990.720p.BDRip.x264-HANDJOB.mkv',
    completed: true
  },
  { 
    title: 'United.93.2006.720p.BluRay.X264-AMIABLE',
    completed: true
  },
  { 
    title: 'X-Men.First.Class.2011.720p.BluRay.DTS.x264-HiDt.mkv',
    completed: true
  },
  { 
    title: 'The.Goonies.1985.720p.BluRay.DTS.x264-ESIR.mkv',
    completed: true
  },
  { 
    title: 'The.King.of.Comedy.1982.720p.BluRay.X264-AMIABLE.mkv',
    completed: true
  },
  { 
    title: 'Source.Code.REPACK.720p.Bluray.x264-MHD',
    completed: true
  },
  { 
    title: 'Batman.The.Dark.Knight.Returns.Part.2.2013.720p.Bluray.DD5.1.x264-EucHD.mkv',
    completed: true
  },
  { 
    title: 'Batman.The.Dark.Knight.Returns.Part.1.2012.720p.Bluray.DD5.1.x264-EucHD.mkv',
    completed: true
  },
  { 
    title: 'Sherlock.Holmes.A.Game.of.Shadows.2011.720p.BluRay.DD5.1.x264-ThD.mkv',
    completed: true
  },
  { 
    title: 'American.Gangster.2007.720p.HDDVD.DTS.x264-ESiR.mkv',
    completed: true
  },
  { 
    title: 'Following.1998.720p.BluRay.x264-HD4U',
    completed: true
  },
  { 
    title: 'Lord of War',
    completed: true
  },
  { 
    title: 'Kiss.Kiss.Bang.Bang.2005.720p.BluRay.DD5.1.x264-EbP.mkv',
    completed: true
  },
  { 
    title: '28.Days.Later.2002.Blu-ray.Re.x264.720p.DTS-HDS.mkv',
    completed: true
  },
  { 
    title: 'South Park Bigger, Longer & Uncut 1999 720p BluRay x264-EbP.mkv',
    completed: true
  },
  { 
    title: 'Die Hard 3 (720p).mkv',
    completed: true
  },
  { 
    title: 'Moneyball.2011.iNTERNAL.720p.BluRay.x264-AVS720',
    completed: true
  },
  { 
    title: 'Eastern.Promises.720p.HDDVD.DTS.x264.PROPER-BLiND.mkv',
    completed: true
  },
  { 
    title: 'Superbad.2007.Unrated.Extended.Special.Edition.Bluray.720p.DTS.x264-CHD',
    completed: true
  },
  { 
    title: 'Catch.Me.If.You.Can.2002.720p.BluRay.DTS.x264-Positive.mkv',
    completed: true
  },
  { 
    title: 'Hot.Fuzz.2007.BluRay.720p.DTS.x264-CHD.mkv',
    completed: true
  },
  { 
    title: 'Iron.Man.2008.720p.BluRay.x264-EbP.mkv',
    completed: true
  },
  { 
    title: 'Batman.Under.the.Red.Hood.2010.720p.x264-qcf.mkv',
    completed: true
  },
  { 
    title: 'Mystic.River.2003.720p.BluRay.DTS.x264-CtrlHD',
    completed: true
  },
  { 
    title: 'No.Country.for.Old.Men.2007.720p.BluRay.DD5.1.x264-CRiSC.mkv',
    completed: true
  },
  { 
    title: 'The.Terminator.1984.720p.BluRay.x264-ESiR',
    completed: true
  },
  { 
    title: 'The.Avengers.2012.720p.Bluray.DTS.x264-DON.mkv',
    completed: true
  },
  { 
    title: 'Mad.Men.S07E05.The.Runaways.720p.WEB-DL.DD5.1.h.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'Cinderella.Man.2005.720p.BluRay.x264-CtrlHD.mkv',
    completed: true
  },
  { 
    title: 'Shaun.Of.The.Dead.2004.720p.HDDVD.x264-SEPTiC',
    completed: true
  },
  { 
    title: 'The.Incredibles.2004.720p.BluRay.x264-EbP.mkv',
    completed: true
  },
  { 
    title: 'Reservoir.Dogs.1992.720p.BluRay.DD5.1.x264-DON.mkv',
    completed: true
  },
  { 
    title: 'Silicon Valley S01E05 720p HDTV DD5.1 x264-CtrlHD.mkv',
    completed: true
  },
  { 
    title: 'District.9.2009.PROPER.720p.BluRay.x264-FLHD',
    completed: true
  },
  { 
    title: 'Jaws.1975.720p.BluRay.X264-AMIABLE',
    completed: true
  },
  { 
    title: 'Flags of Our Fathers.mkv',
    completed: true
  },
  { 
    title: 'Letters.From.Iwo.Jima.2006.720p.BluRay.x264-EbP.mkv',
    completed: true
  },
  { 
    title: 'Goodfellas.1990.720p.BluRay.DD5.1.x264-DON.mkv',
    completed: true
  },
  { 
    title: 'Lone.Survivor.2013.BluRay.720p.x264.AC3-k0unit.mkv',
    completed: true
  },
  { 
    title: 'Rocky.II.1979.720p.BluRay.x264.DTS-CHD',
    completed: true
  },
  { 
    title: 'Rocky.III.1982.720p.BluRay.x264-SiNNERS.mkv',
    completed: true
  },
  { 
    title: 'Rocky.1976.720p.BluRay.DTS.x264-ESiR.mkv',
    completed: true
  },
  { 
    title: 'Rocky.IV.1985.720p.BluRay.DTS.x264-EbP',
    completed: true
  },
  { 
    title: 'Trailer Park Boys S04 DVDRip AC3 x264-BTN',
    completed: true
  },
  { 
    title: 'Trailer Park Boys S07 DVDRip AC3 x264-BTN',
    completed: true
  },
  { 
    title: 'Trailer Park Boys S05 DVDRip AC3 x264-BTN',
    completed: true
  },
  { 
    title: 'Trailer Park Boys S03 DVDRip AC3 x264-BTN',
    completed: true
  },
  { 
    title: 'Trailer Park Boys S06 DVDRip AC3 x264-BTN',
    completed: true
  },
  { 
    title: 'Trailer Park Boys S02 DVDRip AC3 x264-BTN',
    completed: true
  },
  { 
    title: 'Trailer Park Boys S01 DVDRip AC3 x264-BTN',
    completed: true
  },
  { 
    title: 'ESPN.30.For.30.Jordan.Rides.The.Bus.2010.720p.BluRay.x264-SEMTEX',
    completed: true
  },
  { 
    title: 'Anthony.Bourdain.Parts.Unknown.S03E04.Mexico.City.720p.HDTV.x264-DUKES',
    completed: true
  },
  { 
    title: 'Tobacco - Ultima II Massage [320]',
    completed: true
  },
  { 
    title: 'Mad.Men.S07E04.The.Monolith.720p.WEB-DL.DD5.1.h.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'The.Sopranos.S02.PROPER.720p.WEB-DL.h.264.DD.5.1-NTb',
    completed: true
  },
  { 
    title: 'Silicon Valley S01E04 720p HDTV DD5.1 x264-CtrlHD.mkv',
    completed: true
  },
  { 
    title: 'Game.of.Thrones.S04E04.720p.HDTV.DD5.1.x264-DON.mkv',
    completed: true
  },
  { 
    title: 'Anthony.Bourdain.Parts.Unknown.S03E03.720p.HDTV.x264-DUKES',
    completed: true
  },
  { 
    title: 'Mad.Men.S07E03.Field.Trip.720p.WEB-DL.DD5.1.h.264-NTb.mkv',
    completed: true
  },
  { 
    title: 'Fargo.S01E03.A.Muddy.Road.720p.WEB-DL.DD5.1.H.264-BS.mkv',
    completed: true
  },
  { 
    title: 'Nas - Life is Good [2012 CD-MP3-320-CBR]',
    completed: true
  },
  { 
    title: 'Dr. Dre - The Chronic',
    completed: true
  },
  { 
    title: 'Dr. Dre Chronic 2001',
    completed: true
  },
  { 
    title: 'domoxalchemist_no_idols',
    completed: true
  },
  { 
    title: 'Death Grips - No Love Deep Web [2012]',
    completed: true
  },
  { 
    title: 'Death Grips - The Money Store (2012)',
    completed: true
  },
  { 
    title: 'Fuck Buttons - Slow Focus',
    completed: true
  },
  { 
    title: 'Jay Electronica - Best Of So Far (2010) (V0)',
    completed: true
  },
  { 
    title: 'M B V',
    completed: true
  },
  { 
    title: 'Jay Rock - Follow Me Home - (2011)',
    completed: true
  },
  { 
    title: 'Domo Genesis - Under The Influence [2011] (320)',
    completed: true
  },
  { 
    title: '[2014] Pharrell Williams - G I R L [320]',
    completed: true
  },
  { 
    title: 'Death Grips - Exmilitary (2011) - 320 - WEB',
    completed: true
  },
  { 
    title: 'Vampire Weekend - Modern Vampires of the City',
    completed: true
  },
  { 
    title: 'One Day As A Lion - One Day As A Lion [320CBR]',
    completed: true
  },
  { 
    title: 'Anthony.Bourdain.Parts.Unknown.S03E02.Las.Vegas.720p.HDTV.x264-DUKES',
    completed: true
  },
  { 
    title: 'Mad.Men.S07E02.720p.HDTV.x264-REMARKABLE',
    completed: true
  },
  { 
    title: 'Silicon Valley S01E01 720p HDTV DD5.1 x264-CtrlHD.mkv',
    completed: true
  },
  { 
    title: 'Silicon Valley S01E02 720p HDTV DD5.1 x264-CtrlHD.mkv',
    completed: true
  },
  { 
    title: 'Hannibal.S02E01.Kaiseki.720p.WEB-DL.DD5.1.H.264-NTb.mkv',
    completed: true
  },
  { 
    title: '30.for.30.S02E18.Bad.Boys.720p.HDTV.x264-BALLS.mkv',
    completed: true
  },
  { 
    title: 'Parks.and.Recreation.S06E20.720p.HDTV.X264-DIMENSION.mkv',
    completed: true
  },
  { 
    title: 'Fargo.S01E01.The.Crocodile\'s.Dilemma.720p.WEB-DL.DD5.1.H.264-BS.mkv',
    completed: true
  },
  { 
    title: 'Leon.1994.2in1.720p.BluRay.DTS.x264-ESiR',
    completed: true
  },
  { 
    title: 'The.Departed.2006.720p.BluRay.x264-fty',
    completed: true
  },
  { 
    title: 'Children.of.Men.2006.720p.BluRay.DTS.x264-fty',
    completed: true
  },
  { 
    title: 'Game of Thrones S04E02 720p HDTV DD5.1 x264',
    completed: true
  },
  { 
    title: 'mad.men.s07e01.720p.hdtv.x264-killers.mkv',
    completed: true
  },
  { 
    title: 'Its.Always.Sunny.in.Philadelphia.S01.DVDRip.XviD-NODLABS',
    completed: true
  },
  { 
    title: 'Parks and Recreation S06E19 720p WEB-DL DD5.1 H.264.mkv',
    completed: true
  },
  { 
    title: 'Indiana.Jones.and.the.Temple.of.Doom.1984.720p.BluRay.DD5.1.x264-EbP',
    completed: true
  },
  { 
    title: 'Raiders.of.the.Lost.Ark.1981.720p.BluRay.DD5.1.x264-EbP',
    completed: true
  },
  { 
    title: 'Crazy.Stupid.Love.2011.720p.BluRay.x264-DON',
    completed: true
  },
  { 
    title: 'The.Descent.2005.720p.BluRay.DD5.1.x264-EbP.mkv',
    completed: true
  },
  { 
    title: 'Madvillainy',
    completed: true
  },
  { 
    title: 'justified.s05e13.720p.hdtv.x264-killers.mkv',
    completed: true
  },
  { 
    title: 'Justified S05E12 720p WEB-DL DD5.1 H.264.mkv',
    completed: true
  },
  { 
    title: 'Justified S05E11 720p WEB-DL DD5.1 H.264.mkv',
    completed: true
  },
  { 
    title: 'Game of Thrones S04E01 720p HDTV DD5.1 x264',
    completed: true
  },
  { 
    title: 'Parks and Recreation S06E18 720p WEB-DL DD5.1 H.264.mkv',
    completed: true
  },
  { 
    title: 'Justified S05E10 720p WEB-DL DD5.1 H.264.mkv',
    completed: true
  },
  { 
    title: 'Justified.S05E09.720p.HDTV.x264-REMARKABLE.mkv',
    completed: true
  },
  { 
    title: 'Man.Of.Steel.2013.720p.BluRay.DTS.x264-CtrlHD',
    completed: true
  },
  { 
    title: 'Road.To.Perdition.2002.720p.BluRay.x264-EbP.mkv',
    completed: true
  },
  { 
    title: 'Planet.Earth.2006.720p.BluRay.x264.DTS-WiKi',
    completed: true
  },
  { 
    title: 'Hannibal.S01.720p.BluRay.DD5.1.x264-DON',
    completed: true
  },
  { 
    title: 'Brooklyn.Nine-Nine.S01.720p.WEB-DL.DD5.1.H.264-NTb',
    completed: true
  },
  { 
    title: 'Orphan.Black.S01.720p.BluRay.x264-NTb',
    completed: true
  },
  { 
    title: 'Wreck-It.Ralph.2012.720p.BluRay.DD5.1.x264-HiDt',
    completed: true
  },
  { 
    title: 'Broad.City.S01.1080p.WEB-DL.AAC2.0.h.264-BTN',
    completed: true
  },
  { 
    title: 'The.Wolf.of.Wall.Street.2013.720p.BluRay.DD5.1.x264-HiDt',
    completed: true
  },
  { 
    title: 'Parks and Recreation S06E17 720p WEB-DL DD5.1 H.264.mkv',
    completed: true
  },
  { 
    title: 'Rick_Ross-Mastermind-(Deluxe_Edition)-2014-CR',
    completed: true
  },
  { 
    title: 'Justified S05E09 720p WEB-DL DD5.1 H.264.mkv',
    completed: true
  },
  { 
    title: 'Parks and Recreation S06E16 720p WEB-DL DD5.1 H.264.mkv',
    completed: true
  },
  { 
    title: 'Parks.and.Recreation.S06E16.720p.HDTV.X264-DIMENSION.mkv',
    completed: true
  },
  { 
    title: 'Dizzee_Rascal-The_Fifth-2013-C4',
    completed: true
  },
  { 
    title: 'Parks.and.Recreation.S06E15.720p.HDTV.X264-DIMENSION.mkv',
    completed: true
  },
  { 
    title: 'Justified.S05E08.720p.HDTV.x264-REMARKABLE.mkv',
    completed: true
  },
  { 
    title: 'Killer.Joe.2011.720p.BluRay.DTS.x264-HiDt',
    completed: true
  },
  { 
    title: 'Parks.and.Recreation.S06E14.720p.HDTV.X264-DIMENSION.mkv',
    completed: true
  },
  { 
    title: 'justified.s05e07.720p.hdtv.x264-killers.mkv',
    completed: true
  },
  { 
    title: '21.Jump.Street.2012.720p.BluRay.DTS.x264-HiDt',
    completed: true
  },
  { 
    title: 'Game.of.Thrones.S03.720p.BluRay.x264.DTS-WiKi',
    completed: true
  },
  { 
    title: 'Gravity.2013.720p.BluRay.DTS.x264-HiDt.mkv',
    completed: true
  },
  { 
    title: 'Schoolboy_Q-Oxymoron-(Deluxe_Edition)-2014-CR',
    completed: true
  },
  { 
    title: '12.Years.A.Slave.2013.720p.BluRay.x264-BLOW',
    completed: true
  },
  { 
    title: 'House.of.Cards.S01.720p.BluRay.x264.DTS-WiKi',
    completed: true
  },
  { 
    title: 'justified.s05e06.720p.hdtv.x264-2hd.mkv',
    completed: true
  },
  { 
    title: 'The Glitch Mob - Love Death Immortality',
    completed: true
  },
  { 
    title: 'How.to.Train.Your.Dragon.2010.720p.BluRay.DTS.x264-HiDt',
    completed: true
  },
  { 
    title: 'Million Dollar Baby 2004 720p BluRay DTS x264-HDMaNiAcS',
    completed: true
  },
  { 
    title: 'Mud.2012.720p.BluRay.DTS.x264-HiDt',
    completed: true
  },
  { 
    title: 'The.Social.Network.2010.1080p.BluRay.x264-HiDt',
    completed: true
  },
  { 
    title: 'Club.Dread.2004.720p.WEB-DL.AAC2.0.H.264.mkv',
    completed: true
  },
  { 
    title: 'Schoolboy_Q-Man_Of_The_Year-WEB-2013-wWs',
    completed: true
  },
  { 
    title: 'Kendrick Lamar - good kid, m.A.A.d city (Target Deluxe Edition) [2012] [320 kbps]',
    completed: true
  },
  { 
    title: 'The Cold Vein',
    completed: true
  },
  { 
    title: 'Clipse - Til The Casket Drops (V0)',
    completed: true
  },
  { 
    title: 'Clipse',
    completed: true
  },
  { 
    title: 'OFWGKTA - The OF Tape, Vol. 2 (2012) [320]',
    completed: true
  },
  { 
    title: 'Nujabes - Metaphorical Music',
    completed: true
  },
  { 
    title: 'Nujabes - Modal Soul [320]',
    completed: true
  },
  { 
    title: 'Danny Brown - Old',
    completed: true
  },
  { 
    title: 'The Glitch Mob - Drink The Sea Remixes Vol. 2 (2011) - MP3 320',
    completed: true
  },
  { 
    title: 'Drink The Sea_ The Remixes Vol. 1',
    completed: true
  },
  { 
    title: '01 Local Area Network.mp3',
    completed: true
  },
  { 
    title: 'Justice - A Cross The Universe V0',
    completed: true
  },
  { 
    title: 'Jay-Z - Kingdom Come',
    completed: true
  },
  { 
    title: 'Outkast - Aquemini',
    completed: true
  },
  { 
    title: 'Outkast - Stankonia',
    completed: true
  },
  { 
    title: 'Speakerboxx',
    completed: true
  },
  { 
    title: 'Outkast - Idlewild [MP3, 320, 2006]',
    completed: true
  },
  { 
    title: 'ATLiens',
    completed: true
  },
  { 
    title: '1993 - Undertow',
    completed: true
  },
  { 
    title: 'Tool - Opiate',
    completed: true
  },
  { 
    title: 'Broken Boy Soldiers',
    completed: true
  },
  { 
    title: 'eMOTIVe',
    completed: true
  },
  { 
    title: 'Gorillaz - Demon Days',
    completed: true
  },
  { 
    title: 'Deftones',
    completed: true
  },
  { 
    title: 'Insomnia.2002.720p.BluRay.x264-HiDt',
    completed: true
  },
  { 
    title: 'Lincoln.2012.720p.BluRay.DD5.1.x264-HiDt',
    completed: true
  },
  { 
    title: 'This.Is.the.End.2013.720p.BluRay.DD5.1.x264-HiDt',
    completed: true
  },
  { 
    title: 'Captain.Phillips.2013.720p.BluRay.DD5.1.x264-HiDt',
    completed: true
  },
  { 
    title: 'Pacific.Rim.2013.720p.BluRay.DTS.x264-HiDt',
    completed: true
  },
  { 
    title: 'Modest Mouse - We Were Dead Before the Ship Even Sank (2007) - [MP3-320]',
    completed: true
  },
  { 
    title: 'The Glitch Mob - We Can Make The World Stop',
    completed: true
  },
  { 
    title: 'Death Grips - The Money Store (2012) [320]',
    completed: true
  },
  { 
    title: 'Ratatat - LP4 [320]',
    completed: true
  },
  { 
    title: 'Boards of Canada - Tomorrow\'s Harvest [320 WEB]',
    completed: true
  },
  { 
    title: 'Rush.2013.576p.BDRip.x264-HANDJOB.mkv',
    completed: true
  },
  { 
    title: 'Run the Jewels - Sea Legs (Dave Sitek Remix) [MP3-320]',
    completed: true
  },
  { 
    title: 'The Glitch Mob - 2010 - Drink the Sea (320)',
    completed: true
  },
  { 
    title: '[2013] Childish Gambino - Because the Internet (320 CBR)',
    completed: true
  },
  { 
    title: 'Zero.Dark.Thirty.2012.BluRay.720p.DTS.x264-DON.mkv',
    completed: true
  },
  { 
    title: 'Mac Miller - Watching Movies with the Sound Off (Deluxe Edition) (2013) [LAME MP3 CBR 320]',
    completed: true
  },
  { 
    title: 'Eminem - The Marshall Mathers LP 2 - 2013 (CD MP3 320)',
    completed: true
  },
  { 
    title: 'Ab-Soul - Control System (2012) [320]',
    completed: true
  },
  { 
    title: 'Thank.You.For.Smoking.2005.720p.WEB-DL.DD5.1.h264-HDCLUB',
    completed: true
  },
  { 
    title: 'Lawless.2012.720p.BluRay.DTS.x264-HiDt',
    completed: true
  },
  { 
    title: 'The Conjuring 2013 720p BluRay DTS x264-CtrlHD',
    completed: true
  },
  { 
    title: 'Prodigy & Alchemist - Albert Einstein (2013) [320]',
    completed: true
  },
  { 
    title: 'Looper.2012.720p.BluRay.DTS.x264-HiDt',
    completed: true
  },
  { 
    title: 'Yppah - Eighty One [2012] [320]',
    completed: true
  },
  { 
    title: 'Billions and Billions (2010) (320)',
    completed: true
  },
  { 
    title: 'Cake - Showroom of Compassion (320)',
    completed: true
  },
  { 
    title: 'The.Dark.Knight.Rises.2012.720p.BluRay.DTS.x264-HiDt',
    completed: true
  },
  { 
    title: 'Cage the Elephant - Melophobia (2013)',
    completed: true
  },
  { 
    title: 'Hell Hath No Fury',
    completed: true
  }
])
.config(function($routeProvider) {
  $routeProvider.when('/torrents', {
    templateUrl: 'torrents/torrents.tpl.html',
    controller: 'TorrentsCtrl as torrents',
    resolve: {
      torrents: function(transmissionRPC, GET_TORRENTS, TORRENTS) {
        // transmissionRPC.torrents(GET_TORRENTS, function(response) {
        //   console.log(response);
        // });
        return TORRENTS;
      }
    }
  });
});
