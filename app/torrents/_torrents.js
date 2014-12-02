angular.module('transmission.torrents', [
	'transmission.torrents.services'
])
.constant('TORRENTS', [
	{ 
		title: 'Ted.2012.UNRATED.720p.BluRay.DTS.x264-HiDt' 
	},
	{ 
		title: 'Drake - 6 God (2014) - WEB 320' 
	},
	{ 
		title: 'Drake - Heat Of The Moment (2014) - WEB 320' 
	},
	{ 
		title: 'Drake - How About Now (2014) - WEB 320' 
	},
	{ 
		title: 'Drake - Days In The East (Single) (2014) [WEB-320]' 
	},
	{ 
		title: 'Big Sean - I Don\'t Fuck With You (320)' 
	},
	{ 
		title: 'Big Sean - Paradise (2014) [LAME MP3]' 
	},
	{ 
		title: 'Hello.Ladies-The.Movie.720p.HDTV.x264-BATV.mkv' 
	},
	{ 
		title: 'Dawn.of.the.Planet.of.the.Apes.2014.720p.BluRay.DTS.x264-decibeL.mkv' 
	},
	{ 
		title: 'The.Soup.2014.11.26.720p.HDTV.x264-NTb.mkv' 
	},
	{ 
		title: 'Gotham.S01E10.720p.HDTV.X264-DIMENSION.mkv' 
	},
	{ 
		title: 'The.Walking.Dead.S05E07.720p.WEB-DL.DD5.1.H.264-Cyphanix.mkv' 
	},
	{ 
		title: 'The.Walking.Dead.S05E07.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Homeland.S04E09.There\'s.Something.Else.Going.On.720p.WEB-DL.DD5.1.H.264-BS.mkv' 
	},
	{ 
		title: 'Brooklyn.Nine-Nine.S02E08.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'South.Park.S18E08.Cock.Magic.720p.WEB-DL.AAC2.0.H.264-NTb.mkv' 
	},
	{ 
		title: 'The.League.S06E13.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv' 
	},
	{ 
		title: 'The.League.S06E12.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv' 
	},
	{ 
		title: 'The.League.S06E12.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'the.soup.2014.11.19.720p.hdtv.x264-w4f.mkv' 
	},
	{ 
		title: 'The.League.S06E13.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'South.Park.S18E08.720p.HDTV.X264-DIMENSION.mkv' 
	},
	{ 
		title: 'Guardians.of.the.Galaxy.2014.720p.BluRay.x264-SPARKS' 
	},
	{ 
		title: 'Gotham.S01E09.720p.HDTV.X264-DIMENSION.mkv' 
	},
	{ 
		title: 'The.Walking.Dead.S05E06.720p.WEB-DL.DD5.1.H.264-Cyphanix.mkv' 
	},
	{ 
		title: 'The.Walking.Dead.S05E06.720p.HDTV.X264-DIMENSION.mkv' 
	},
	{ 
		title: 'Anthony.Bourdain.Parts.Unknown.S04E08.Jamaica.720p.HDTV.x264-DHD.mkv' 
	},
	{ 
		title: 'Brooklyn.Nine-Nine.S02E07.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Homeland.S04E08.Halfway.to.a.Donut.720p.WEB-DL.DD5.1.H.264-BS.mkv' 
	},
	{ 
		title: 'South.Park.S18E07.Grounded.Vindaloop.720p.WEB-DL.AAC2.0.H.264-NTb.mkv' 
	},
	{ 
		title: 'The.League.S06E11.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv' 
	},
	{ 
		title: 'the.soup.2014.11.12.720p.hdtv.x264-w4f.mkv' 
	},
	{ 
		title: 'The.League.S06E11.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'South.Park.S18E07.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Big K.R.I.T. - Cadillactica (320)' 
	},
	{ 
		title: 'Gotham.S01E08.720p.HDTV.X264-DIMENSION.mkv' 
	},
	{ 
		title: 'The.Walking.Dead.S05E05.720p.WEB-DL.DD5.1.H.264-Cyphanix.mkv' 
	},
	{ 
		title: 'Last.Week.Tonight.With.John.Oliver.S01E24.HDTV.x264-BATV.mp4' 
	},
	{ 
		title: 'Anthony.Bourdain.Parts.Unknown.S04E07.Massachusetts.720p.HDTV.x264-DHD' 
	},
	{ 
		title: 'The.Walking.Dead.S05E05.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Brooklyn.Nine-Nine.S02E06.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Homeland.S04E07.Redux.720p.WEB-DL.DD5.1.H.264-BS.mkv' 
	},
	{ 
		title: 'South.Park.S18E06.Freemium.Isnt.Free.720p.WEB-DL.AAC2.0.H.264-NTb.mkv' 
	},
	{ 
		title: 'The.League.S06E10.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv' 
	},
	{ 
		title: 'the.soup.2014.11.05.720p.hdtv.x264-w4f.mkv' 
	},
	{ 
		title: 'South.Park.S18E06.720p.HDTV.X264-DIMENSION.mkv' 
	},
	{ 
		title: 'The.League.S06E10.720p.HDTV.X264-DIMENSION.mkv' 
	},
	{ 
		title: 'Gotham.S01E07.720p.HDTV.X264-DIMENSION.mkv' 
	},
	{ 
		title: 'The.Walking.Dead.S05E04.720p.WEB-DL.DD5.1.H.264-Cyphanix.mkv' 
	},
	{ 
		title: 'Last.Week.Tonight.With.John.Oliver.S01E23.720p.HDTV.x264-BATV.mkv' 
	},
	{ 
		title: 'Homeland.S04E06.From.A.To.B.And.Back.Again.720p.WEB-DL.DD5.1.H.264-BS.mkv' 
	},
	{ 
		title: 'Anthony.Bourdain.Parts.Unknown.S04E06.Iran.720p.HDTV.x264-DHD.mkv' 
	},
	{ 
		title: 'The.Walking.Dead.S05E04.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Homeland.S04E06.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Brooklyn.Nine-Nine.S02E05.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'South.Park.S18E05.The.Magic.Bush.720p.WEB-DL.AAC2.0.H.264-NTb.mkv' 
	},
	{ 
		title: 'The.League.S06E09.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv' 
	},
	{ 
		title: 'the.soup.2014.10.29.720p.hdtv.x264-w4f.mkv' 
	},
	{ 
		title: 'South.Park.S18E05.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'The.League.S06E09.720p.HDTV.X264-DIMENSION.mkv' 
	},
	{ 
		title: 'Source.Code.2011.720p.BluRay.DTS.x264-HiDt.mkv' 
	},
	{ 
		title: 'Boardwalk.Empire.S05E08.720p.HDTV.DD5.1.x264-DON.mkv' 
	},
	{ 
		title: 'Gotham.S01E06.720p.HDTV.X264-DIMENSION.mkv' 
	},
	{ 
		title: 'The.League.S06E08.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv' 
	},
	{ 
		title: 'The.Walking.Dead.S05E03.720p.WEB-DL.DD5.1.H.264-Cyphanix.mkv' 
	},
	{ 
		title: 'Last.Week.Tonight.With.John.Oliver.S01E22.HDTV.x264-BATV.mp4' 
	},
	{ 
		title: 'Boardwalk.Empire.S05E08.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Anthony.Bourdain.Parts.Unknown.S04E05.Tanzania.720p.HDTV.x264-DHD.mkv' 
	},
	{ 
		title: 'The.Walking.Dead.S05E03.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Homeland.S04E05.About.A.Boy.720p.WEB-DL.DD5.1.H.264-BS.mkv' 
	},
	{ 
		title: 'Indiana Jones and the Last Crusade 1989 720p BluRay DD5.1 x264-EbP' 
	},
	{ 
		title: 'Brooklyn.Nine-Nine.S02E01.720p.WEB-DL.DD5.1.H.264-NTb.mkv' 
	},
	{ 
		title: 'Brooklyn.Nine-Nine.S02E02.720p.WEB-DL.DD5.1.H.264-NTb.mkv' 
	},
	{ 
		title: 'Run The Jewels 2' 
	},
	{ 
		title: 'the.soup.2014.10.22.720p.hdtv.x264-w4f.mkv' 
	},
	{ 
		title: 'The.League.S06E08.720p.HDTV.X264-DIMENSION.mkv' 
	},
	{ 
		title: 'Boardwalk.Empire.S05E07.720p.HDTV.DD5.1.x264-DON.mkv' 
	},
	{ 
		title: 'Boardwalk.Empire.S05E00.The.Final.Shot-A.Farewell.to.Boardwalk.Empire.HDTV.x264-BATV.mp4' 
	},
	{ 
		title: 'Boardwalk.Empire.S05E00.The.Final.Shot-A.Farewell.to.Boardwalk.Empire.HDTV.x264-BATV' 
	},
	{ 
		title: 'Gotham.S01E05.720p.HDTV.X264-DIMENSION.mkv' 
	},
	{ 
		title: 'The.League.S06E07.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv' 
	},
	{ 
		title: 'The.Walking.Dead.S05E02.720p.WEB-DL.DD5.1.H.264-Cyphanix.mkv' 
	},
	{ 
		title: 'Battlestar.Galactica.S01.720p.BluRay.DTS.x264-EPiK' 
	},
	{ 
		title: 'Last.Week.Tonight.With.John.Oliver.S01E21.720p.HDTV.x264-BATV.mkv' 
	},
	{ 
		title: 'The.Walking.Dead.S05E02.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Anthony.Bourdain.Parts.Unknown.S04E04.Vietnam.720p.HDTV.x264-DHD.mkv' 
	},
	{ 
		title: 'Brooklyn.Nine-Nine.S02E04.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Homeland.S04E04.Iron.In.The.Fire.720p.WEB-DL.DD5.1.H.264-BS.mkv' 
	},
	{ 
		title: 'Logic-Under_Pressure-(Deluxe_Edition)-2014-CR' 
	},
	{ 
		title: 'Logic - Young Sinatra Undeniable (DatPiff.com)' 
	},
	{ 
		title: 'the.soup.2014.10.15.720p.hdtv.x264-w4f.mkv' 
	},
	{ 
		title: 'The.League.S06E07.720p.HDTV.X264-DIMENSION.mkv' 
	},
	{ 
		title: 'South.Park.S18E04.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Gotham.S01E04.720p.HDTV.X264-DIMENSION.mkv' 
	},
	{ 
		title: 'The.Walking.Dead.S05E01.720p.WEB-DL.DD5.1.H.264-Cyphanix.mkv' 
	},
	{ 
		title: 'Anthony.Bourdain.Parts.Unknown.S04E03.Paraguay.720p.HDTV.x264-DHD.mkv' 
	},
	{ 
		title: 'Brooklyn.Nine-Nine.S02E03.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Homeland.S04E03.Shalwar.Kameez.720p.WEB-DL.DD5.1.H.264-BS.mkv' 
	},
	{ 
		title: 'South.Park.S18E03.The.Cissy.720p.WEB-DL.AAC2.0.H.264-NTb.mkv' 
	},
	{ 
		title: 'R. Kelly - 12 Play (1993) V0' 
	},
	{ 
		title: 'R. Kelly - Chocolate Factory (2003)' 
	},
	{ 
		title: 'Nelly - Da Derrty Version - The Reinvention (2003) V0' 
	},
	{ 
		title: 'Logic - Under Pressure (2014) [AAC 256]' 
	},
	{ 
		title: 'Vince Staples - Hell Can Wait (2014) - WEB 320' 
	},
	{ 
		title: 'Ginuwine - Pony [Single] 1996 [MP3-320]' 
	},
	{ 
		title: 'Alt-J - This Is All Yours (320)' 
	},
	{ 
		title: 'Aphex Twin - Syro (2014) [320]' 
	},
	{ 
		title: 'The.League.S06E06.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv' 
	},
	{ 
		title: 'the.soup.2014.10.08.720p.hdtv.x264-w4f.mkv' 
	},
	{ 
		title: 'South.Park.S18E03.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Review.S01.720p.WEB-DL.AAC2.0.H.264-BTN' 
	},
	{ 
		title: 'Boardwalk.Empire.S05E05.720p.HDTV.DD5.1.x264-DON.mkv' 
	},
	{ 
		title: 'Trent Reznor & Atticus Ross - Gone Girl (Soundtrack from the Motion Picture) (2014) - WEB 320' 
	},
	{ 
		title: 'Gotham S01E03 720p HDTV DD5.1 x264-CtrlHD.mkv' 
	},
	{ 
		title: 'Last.Week.Tonight.With.John.Oliver.S01E20.720p.HDTV.x264-BATV.mkv' 
	},
	{ 
		title: 'Anthony.Bourdain.Parts.Unknown.S04E02.The.Bronx.720p.HDTV.x264-DHD.mkv' 
	},
	{ 
		title: 'mulaney.s01e01.720p.hdtv.x264-2hd.mkv' 
	},
	{ 
		title: 'Homeland.S04E02.Trylon.and.Perisphere.720p.WEB-DL.DD5.1.H.264-BS.mkv' 
	},
	{ 
		title: 'Homeland.S04E01.Drone.Queen.720p.WEB-DL.DD5.1.H.264-BS.mkv' 
	},
	{ 
		title: 'South.Park.S18E02.Gluten.Free.Ebola.720p.WEB-DL.AAC2.0.H.264-NTb.mkv' 
	},
	{ 
		title: 'The.League.S06E05.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv' 
	},
	{ 
		title: 'the.soup.2014.10.01.720p.hdtv.x264-w4f.mkv' 
	},
	{ 
		title: 'South.Park.S18E02.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Boardwalk.Empire.S05E04.720p.HDTV.DD5.1.x264-DON.mkv' 
	},
	{ 
		title: 'Gotham.S01E02.720p.HDTV.X264-DIMENSION.mkv' 
	},
	{ 
		title: 'Last.Week.Tonight.With.John.Oliver.S01E19.720p.HDTV.x264-BATV.mkv' 
	},
	{ 
		title: 'Anthony.Bourdain.Parts.Unknown.S04E01.Shanghai.720p.HDTV.x264-DHD.mkv' 
	},
	{ 
		title: 'Anthony.Bourdain.Parts.Unknown.S04E00.Prime.Cuts.Season.3.720p.HDTV.x264-DHD.mkv' 
	},
	{ 
		title: 'South.Park.S18E01.Go.Fund.Yourself.720p.WEB DL.AAC2.0.H.264-NTb.mkv' 
	},
	{ 
		title: 'The.Worlds.End.2013.576p.BDRip.x264-HANDJOB.mkv' 
	},
	{ 
		title: 'South.Park.S18E01.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'The.League.S06E04.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv' 
	},
	{ 
		title: 'the.soup.2014.09.24.720p.hdtv.x264-w4f.mkv' 
	},
	{ 
		title: 'Boardwalk.Empire.S05E03.720p.HDTV.DD5.1.x264-DON.mkv' 
	},
	{ 
		title: 'Gotham.S01E01.720p.HDTV.X264-DIMENSION.mkv' 
	},
	{ 
		title: 'Last.Week.Tonight.With.John.Oliver.S01E18.720p.HDTV.x264-BATV.mkv' 
	},
	{ 
		title: 'Burn.After.Reading.2008.720p.BluRay.x264-EbP.mkv' 
	},
	{ 
		title: 'The.League.S06E03.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv' 
	},
	{ 
		title: 'The.Soup.2014.09.17.720p.HDTV.x264-TTVa.mkv' 
	},
	{ 
		title: 'Big Sean - Hall Of Fame (2013) [320]' 
	},
	{ 
		title: 'Boardwalk.Empire.S05E02.720p.HDTV.DD5.1.x264-DON.mkv' 
	},
	{ 
		title: 'Last.Week.Tonight.With.John.Oliver.S01E17.720p.HDTV.x264-BATV.mkv' 
	},
	{ 
		title: 'Boardwalk.Empire.S05E01.REPACK.720p.HDTV.DD5.1.x264-DON.mkv' 
	},
	{ 
		title: 'The.League.S06E02.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv' 
	},
	{ 
		title: 'the.soup.2014.09.10.720p.hdtv.x264-w4f.mkv' 
	},
	{ 
		title: 'Three.Kings.1999.576p.BDRip.x264-HANDJOB.mkv' 
	},
	{ 
		title: 'Neighbors.2014.720p.BluRay.AC3.x264-HaB' 
	},
	{ 
		title: 'Forgetting.Sarah.Marshall.2008.Unrated.720p.BluRay.DD5.1-EbP' 
	},
	{ 
		title: 'The.Leftovers.S01E10.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Last.Week.Tonight.With.John.Oliver.S01E16.720p.HDTV.x264-BATV.mkv' 
	},
	{ 
		title: 'Intruders.S01E03.Time.Has.Come.Today.720p.WEB-DL.AAC2.0.H.264-NTb.mkv' 
	},
	{ 
		title: 'The.League.S06E01.720p.WEB-DL.DD5.1.H.264-pcsyndicate.mkv' 
	},
	{ 
		title: 'The.Soup.2014.09.03.720p.HDTV.x264-TTVa.mkv' 
	},
	{ 
		title: 'RATKING - So It Goes (2014) [MP3 320]' 
	},
	{ 
		title: 'Nas - It Was Written' 
	},
	{ 
		title: 'Nas - Stillmatic (320)' 
	},
	{ 
		title: 'Nas - I Am (Retail) (1999)' 
	},
	{ 
		title: 'the.soup.2014.08.27.720p.hdtv.x264-w4f.mkv' 
	},
	{ 
		title: 'The.Leftovers.S01E09.720p.HDTV.DD5.1.x264.mkv' 
	},
	{ 
		title: 'intruders.s01e01.720p.hdtv.x264-2hd.mkv' 
	},
	{ 
		title: 'Intruders.S01E02.720p.HDTV.x264-BATV.mkv' 
	},
	{ 
		title: 'Iggy Azalea - The New Classic 2014 (320)' 
	},
	{ 
		title: 'Suits.S04E10.720p.WEB-DL.DD5.1.H.264-NTb.mkv' 
	},
	{ 
		title: 'hard.knocks.s09e03.720p.hdtv.x264-finch.mkv' 
	},
	{ 
		title: 'The.Soup.2014.08.20.720p.HDTV.x264-TTVa.mkv' 
	},
	{ 
		title: 'Tyrant.S01E09.720p.HDTV.x264-IMMERSE.mkv' 
	},
	{ 
		title: 'Last.Week.Tonight.With.John.Oliver.S01E15.720p.HDTV.x264-BATV.mkv' 
	},
	{ 
		title: 'The.Leftovers.S01E08.720p.HDTV.x264-IMMERSE.mkv' 
	},
	{ 
		title: 'Suits.S04E09.PROPER.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'the.soup.2014.08.13.720p.hdtv.x264-w4f.mkv' 
	},
	{ 
		title: 'hard.knocks.902.720p.hdtv.x264-sys.mkv' 
	},
	{ 
		title: 'Tyrant.S01E08.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Run The Jewels [2013] [320]' 
	},
	{ 
		title: 'Hard.Knocks.S09E01.720p.HDTV.x264-BTN.mkv' 
	},
	{ 
		title: 'The.Leftovers.S01E07.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Young Thug, A$AP Ferg & Freddie Gibbs - Old English (2014) - WEB MP3 320' 
	},
	{ 
		title: 'Terminator.2.Judgment.Day.Skynet.Edition.1991.Bluray.720P.X264.DTS-HDChina' 
	},
	{ 
		title: 'A.Few.Good.Men.1992.576p.BDRip.x264-HANDJOB' 
	},
	{ 
		title: 'Suits.S04E08.720p.WEB-DL.DD5.1.H.264-NTb.mkv' 
	},
	{ 
		title: 'the.soup.2014.08.06.720p.hdtv.x264-w4f.mkv' 
	},
	{ 
		title: 'Suits.S04E08.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Tyrant.S01E07.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'The.Sopranos.S03.720p.WEB-DL.DD5.1.h.264-BTN' 
	},
	{ 
		title: 'Riddick.2013.Unrated.DC.720p.BluRay.DTS.x264-HiDt' 
	},
	{ 
		title: 'Penny.Dreadful.S01E01.720p.HDTV.DD5.1.x264-NTb.mkv' 
	},
	{ 
		title: 'Last.Week.Tonight.With.John.Oliver.S01E13.HDTV.x264-BATV.mp4' 
	},
	{ 
		title: 'The.Leftovers.S01E06.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Rise.of.the.Planet.of.the.Apes.2011.720p.BluRay.DTS.x264-HiDt' 
	},
	{ 
		title: 'Elysium.2013.720p.BluRay.DTS.x264-HDMaNiAcS' 
	},
	{ 
		title: 'Captain.America.The.Winter.Soldier.2014.720p.BluRay.DTS.x264-HiDt' 
	},
	{ 
		title: 'Suits.S04E07.720p.WEB-DL.DD5.1.H.264-NTb.mkv' 
	},
	{ 
		title: 'the.soup.2014.07.30.720p.hdtv.x264-w4f.mkv' 
	},
	{ 
		title: 'Suits.S04E07.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Tyrant.S01E06.720p.HDTV.x264-IMMERSE.mkv' 
	},
	{ 
		title: 'The.Leftovers.S01E05.720p.HDTV.x264-KILLERS.mkv' 
	},
	{ 
		title: 'Top.Gear.Burma.Special.2014.720p.BluRay.FLAC.2.0.x264-NTb.mkv' 
	},
	{ 
		title: 'Suits.S04E06.720p.WEB-DL.DD5.1.H.264-NTb.mkv' 
	},
	{ 
		title: 'the.soup.2014.07.23.720p.hdtv.x264-w4f.mkv' 
	},
	{ 
		title: 'Tyrant.S01E05.720p.HDTV.x264-IMMERSE.mkv' 
	},
	{ 
		title: 'Last.Week.Tonight.With.John.Oliver.S01E11.720p.HDTV.x264-BATV.mkv' 
	},
	{ 
		title: 'Orphan.Black.S02.720p.BluRay.x264-DEMAND' 
	},
	{ 
		title: 'The.Lego.Movie.2014.720p.BluRay.DD5.1.x264-HiFi.mkv' 
	},
	{ 
		title: 'Suits.S04E05.720p.WEB-DL.DD5.1.H.264-NTb.mkv' 
	},
	{ 
		title: 'Suits.S04E05.720p.HDTV.x264-KILLERS' 
	},
	{ 
		title: 'The Leftovers S01E03 720p HDTV DD5.1 x264-CtrlHD.mkv' 
	},
	{ 
		title: 'Suits.S04E04.720p.HDTV.x264-KILLERS' 
	},
	{ 
		title: 'Ab-Soul - These Days... (2014) [320]' 
	},
	{ 
		title: 'Suits.S04E03.720p.WEB-DL.DD5.1.H.264-NTb.mkv' 
	},
	{ 
		title: '48.Hrs.1982.720p.BluRay.DTS.x264-decibeL.mkv' 
	},
	{ 
		title: 'Idle' 
	},
	{ 
		title: 'Breaking.Bad.S01.720p.BluRay.x264.DTS-WiKi' 
	},
	{ 
		title: 'Game of Thrones S02 720p BluRay x264 EbP' 
	},
	{ 
		title: 'House.of.Cards.S02.2013.BluRay.720p.x264.DTS-HDWinG' 
	},
	{ 
		title: 'Suits.S04E02.720p.WEB-DL.DD5.1.H.264-NTb.mkv' 
	},
	{ 
		title: 'Game.of.Thrones.S04E10.720p.HDTV.DD5.1.x264-DON.mkv' 
	},
	{ 
		title: 'Training.Day.2001.720p.BluRay.DTS.x264-CRiSC' 
	},
	{ 
		title: 'Jack White - Lazaretto (2014) - CD MP3 320' 
	},
	{ 
		title: 'Suits.S04E01.720p.WEB-DL.DD5.1.H.264-NTb.mkv' 
	},
	{ 
		title: 'Anthony.Bourdain.Parts.Unknown.S03E08.Brazil.720p.HDTV.x264-DHD' 
	},
	{ 
		title: '50 Cent - Animal Ambition An Untamed Desire to Win - 2014 320' 
	},
	{ 
		title: 'Silicon Valley S01E08 720p HDTV DD5.1 x264-CtrlHD.mkv' 
	},
	{ 
		title: 'Anthony.Bourdain.Parts.Unknown.S03E07.Thailand.720p.HDTV.x264-DHD' 
	},
	{ 
		title: 'True.Detective.S01.720p.BluRay.x264.DTS-WiKi' 
	},
	{ 
		title: 'El-P - 2004 - High Water - 320' 
	},
	{ 
		title: 'HS87 - We The Plug (2014) [320 kbps]' 
	},
	{ 
		title: 'Anthony.Bourdain.Parts.Unknown.S03E06.Mississippi.Delta.720p.HDTV.x264-W4F' 
	},
	{ 
		title: 'Mad.Men.S07E07.Waterloo.720p.WEB-DL.DD5.1.h.264-NTb.mkv' 
	},
	{ 
		title: 'Hannibal.S02.720p.WEB-DL.DD5.1.H.264-NTb' 
	},
	{ 
		title: 'Anthony.Bourdain.Parts.Unknown.S03E05.Russia.720p.HDTV.x264-W4F' 
	},
	{ 
		title: 'Silicon Valley S01E07 720p HDTV DD5.1 x264-CtrlHD.mkv' 
	},
	{ 
		title: 'Mad.Men.S07E06.The.Strategy.720p.WEB-DL.DD5.1.h.264-NTb.mkv' 
	},
	{ 
		title: 'Mad.Men.S07E06.720p.HDTV.X264-DIMENSION.mkv' 
	},
	{ 
		title: 'The Black Keys - Turn Blue (2014) - CD MP3 320' 
	},
	{ 
		title: 'Forrest.Gump.1994.720p.BluRay.DTS.x264-ESiR.mkv' 
	},
	{ 
		title: 'Sherlock.Holmes.2009.720p.BluRay.DTS.x264-ESiR' 
	},
	{ 
		title: 'Die.Hard.2.1990.720p.BDRip.x264-HANDJOB.mkv' 
	},
	{ 
		title: 'United.93.2006.720p.BluRay.X264-AMIABLE' 
	},
	{ 
		title: 'X-Men.First.Class.2011.720p.BluRay.DTS.x264-HiDt.mkv' 
	},
	{ 
		title: 'The.Goonies.1985.720p.BluRay.DTS.x264-ESIR.mkv' 
	},
	{ 
		title: 'The.King.of.Comedy.1982.720p.BluRay.X264-AMIABLE.mkv' 
	},
	{ 
		title: 'Source.Code.REPACK.720p.Bluray.x264-MHD' 
	},
	{ 
		title: 'Batman.The.Dark.Knight.Returns.Part.2.2013.720p.Bluray.DD5.1.x264-EucHD.mkv' 
	},
	{ 
		title: 'Batman.The.Dark.Knight.Returns.Part.1.2012.720p.Bluray.DD5.1.x264-EucHD.mkv' 
	},
	{ 
		title: 'Sherlock.Holmes.A.Game.of.Shadows.2011.720p.BluRay.DD5.1.x264-ThD.mkv' 
	},
	{ 
		title: 'American.Gangster.2007.720p.HDDVD.DTS.x264-ESiR.mkv' 
	},
	{ 
		title: 'Following.1998.720p.BluRay.x264-HD4U' 
	},
	{ 
		title: 'Lord of War' 
	},
	{ 
		title: 'Kiss.Kiss.Bang.Bang.2005.720p.BluRay.DD5.1.x264-EbP.mkv' 
	},
	{ 
		title: '28.Days.Later.2002.Blu-ray.Re.x264.720p.DTS-HDS.mkv' 
	},
	{ 
		title: 'South Park Bigger, Longer & Uncut 1999 720p BluRay x264-EbP.mkv' 
	},
	{ 
		title: 'Die Hard 3 (720p).mkv' 
	},
	{ 
		title: 'Moneyball.2011.iNTERNAL.720p.BluRay.x264-AVS720' 
	},
	{ 
		title: 'Eastern.Promises.720p.HDDVD.DTS.x264.PROPER-BLiND.mkv' 
	},
	{ 
		title: 'Superbad.2007.Unrated.Extended.Special.Edition.Bluray.720p.DTS.x264-CHD' 
	},
	{ 
		title: 'Catch.Me.If.You.Can.2002.720p.BluRay.DTS.x264-Positive.mkv' 
	},
	{ 
		title: 'Hot.Fuzz.2007.BluRay.720p.DTS.x264-CHD.mkv' 
	},
	{ 
		title: 'Iron.Man.2008.720p.BluRay.x264-EbP.mkv' 
	},
	{ 
		title: 'Batman.Under.the.Red.Hood.2010.720p.x264-qcf.mkv' 
	},
	{ 
		title: 'Mystic.River.2003.720p.BluRay.DTS.x264-CtrlHD' 
	},
	{ 
		title: 'No.Country.for.Old.Men.2007.720p.BluRay.DD5.1.x264-CRiSC.mkv' 
	},
	{ 
		title: 'The.Terminator.1984.720p.BluRay.x264-ESiR' 
	},
	{ 
		title: 'The.Avengers.2012.720p.Bluray.DTS.x264-DON.mkv' 
	},
	{ 
		title: 'Mad.Men.S07E05.The.Runaways.720p.WEB-DL.DD5.1.h.264-NTb.mkv' 
	},
	{ 
		title: 'Cinderella.Man.2005.720p.BluRay.x264-CtrlHD.mkv' 
	},
	{ 
		title: 'Shaun.Of.The.Dead.2004.720p.HDDVD.x264-SEPTiC' 
	},
	{ 
		title: 'The.Incredibles.2004.720p.BluRay.x264-EbP.mkv' 
	},
	{ 
		title: 'Reservoir.Dogs.1992.720p.BluRay.DD5.1.x264-DON.mkv' 
	},
	{ 
		title: 'Silicon Valley S01E05 720p HDTV DD5.1 x264-CtrlHD.mkv' 
	},
	{ 
		title: 'District.9.2009.PROPER.720p.BluRay.x264-FLHD' 
	},
	{ 
		title: 'Jaws.1975.720p.BluRay.X264-AMIABLE' 
	},
	{ 
		title: 'Flags of Our Fathers.mkv' 
	},
	{ 
		title: 'Letters.From.Iwo.Jima.2006.720p.BluRay.x264-EbP.mkv' 
	},
	{ 
		title: 'Goodfellas.1990.720p.BluRay.DD5.1.x264-DON.mkv' 
	},
	{ 
		title: 'Lone.Survivor.2013.BluRay.720p.x264.AC3-k0unit.mkv' 
	},
	{ 
		title: 'Rocky.II.1979.720p.BluRay.x264.DTS-CHD' 
	},
	{ 
		title: 'Rocky.III.1982.720p.BluRay.x264-SiNNERS.mkv' 
	},
	{ 
		title: 'Rocky.1976.720p.BluRay.DTS.x264-ESiR.mkv' 
	},
	{ 
		title: 'Rocky.IV.1985.720p.BluRay.DTS.x264-EbP' 
	},
	{ 
		title: 'Trailer Park Boys S04 DVDRip AC3 x264-BTN' 
	},
	{ 
		title: 'Trailer Park Boys S07 DVDRip AC3 x264-BTN' 
	},
	{ 
		title: 'Trailer Park Boys S05 DVDRip AC3 x264-BTN' 
	},
	{ 
		title: 'Trailer Park Boys S03 DVDRip AC3 x264-BTN' 
	},
	{ 
		title: 'Trailer Park Boys S06 DVDRip AC3 x264-BTN' 
	},
	{ 
		title: 'Trailer Park Boys S02 DVDRip AC3 x264-BTN' 
	},
	{ 
		title: 'Trailer Park Boys S01 DVDRip AC3 x264-BTN' 
	},
	{ 
		title: 'ESPN.30.For.30.Jordan.Rides.The.Bus.2010.720p.BluRay.x264-SEMTEX' 
	},
	{ 
		title: 'Anthony.Bourdain.Parts.Unknown.S03E04.Mexico.City.720p.HDTV.x264-DUKES' 
	},
	{ 
		title: 'Tobacco - Ultima II Massage [320]' 
	},
	{ 
		title: 'Mad.Men.S07E04.The.Monolith.720p.WEB-DL.DD5.1.h.264-NTb.mkv' 
	},
	{ 
		title: 'The.Sopranos.S02.PROPER.720p.WEB-DL.h.264.DD.5.1-NTb' 
	},
	{ 
		title: 'Silicon Valley S01E04 720p HDTV DD5.1 x264-CtrlHD.mkv' 
	},
	{ 
		title: 'Game.of.Thrones.S04E04.720p.HDTV.DD5.1.x264-DON.mkv' 
	},
	{ 
		title: 'Anthony.Bourdain.Parts.Unknown.S03E03.720p.HDTV.x264-DUKES' 
	},
	{ 
		title: 'Mad.Men.S07E03.Field.Trip.720p.WEB-DL.DD5.1.h.264-NTb.mkv' 
	},
	{ 
		title: 'Fargo.S01E03.A.Muddy.Road.720p.WEB-DL.DD5.1.H.264-BS.mkv' 
	},
	{ 
		title: 'Nas - Life is Good [2012 CD-MP3-320-CBR]' 
	},
	{ 
		title: 'Dr. Dre - The Chronic' 
	},
	{ 
		title: 'Dr. Dre Chronic 2001' 
	},
	{ 
		title: 'domoxalchemist_no_idols' 
	},
	{ 
		title: 'Death Grips - No Love Deep Web [2012]' 
	},
	{ 
		title: 'Death Grips - The Money Store (2012)' 
	},
	{ 
		title: 'Fuck Buttons - Slow Focus' 
	},
	{ 
		title: 'Jay Electronica - Best Of So Far (2010) (V0)' 
	},
	{ 
		title: 'M B V' 
	},
	{ 
		title: 'Jay Rock - Follow Me Home - (2011)' 
	},
	{ 
		title: 'Domo Genesis - Under The Influence [2011] (320)' 
	},
	{ 
		title: '[2014] Pharrell Williams - G I R L [320]' 
	},
	{ 
		title: 'Death Grips - Exmilitary (2011) - 320 - WEB' 
	},
	{ 
		title: 'Vampire Weekend - Modern Vampires of the City' 
	},
	{ 
		title: 'One Day As A Lion - One Day As A Lion [320CBR]' 
	},
	{ 
		title: 'Anthony.Bourdain.Parts.Unknown.S03E02.Las.Vegas.720p.HDTV.x264-DUKES' 
	},
	{ 
		title: 'Mad.Men.S07E02.720p.HDTV.x264-REMARKABLE' 
	},
	{ 
		title: 'Silicon Valley S01E01 720p HDTV DD5.1 x264-CtrlHD.mkv' 
	},
	{ 
		title: 'Silicon Valley S01E02 720p HDTV DD5.1 x264-CtrlHD.mkv' 
	},
	{ 
		title: 'Hannibal.S02E01.Kaiseki.720p.WEB-DL.DD5.1.H.264-NTb.mkv' 
	},
	{ 
		title: '30.for.30.S02E18.Bad.Boys.720p.HDTV.x264-BALLS.mkv' 
	},
	{ 
		title: 'Parks.and.Recreation.S06E20.720p.HDTV.X264-DIMENSION.mkv' 
	},
	{ 
		title: 'Fargo.S01E01.The.Crocodile\'s.Dilemma.720p.WEB-DL.DD5.1.H.264-BS.mkv' 
	},
	{ 
		title: 'Leon.1994.2in1.720p.BluRay.DTS.x264-ESiR' 
	},
	{ 
		title: 'The.Departed.2006.720p.BluRay.x264-fty' 
	},
	{ 
		title: 'Children.of.Men.2006.720p.BluRay.DTS.x264-fty' 
	},
	{ 
		title: 'Game of Thrones S04E02 720p HDTV DD5.1 x264' 
	},
	{ 
		title: 'mad.men.s07e01.720p.hdtv.x264-killers.mkv' 
	},
	{ 
		title: 'Its.Always.Sunny.in.Philadelphia.S01.DVDRip.XviD-NODLABS' 
	},
	{ 
		title: 'Parks and Recreation S06E19 720p WEB-DL DD5.1 H.264.mkv' 
	},
	{ 
		title: 'Indiana.Jones.and.the.Temple.of.Doom.1984.720p.BluRay.DD5.1.x264-EbP' 
	},
	{ 
		title: 'Raiders.of.the.Lost.Ark.1981.720p.BluRay.DD5.1.x264-EbP' 
	},
	{ 
		title: 'Crazy.Stupid.Love.2011.720p.BluRay.x264-DON' 
	},
	{ 
		title: 'The.Descent.2005.720p.BluRay.DD5.1.x264-EbP.mkv' 
	},
	{ 
		title: 'Madvillainy' 
	},
	{ 
		title: 'justified.s05e13.720p.hdtv.x264-killers.mkv' 
	},
	{ 
		title: 'Justified S05E12 720p WEB-DL DD5.1 H.264.mkv' 
	},
	{ 
		title: 'Justified S05E11 720p WEB-DL DD5.1 H.264.mkv' 
	},
	{ 
		title: 'Game of Thrones S04E01 720p HDTV DD5.1 x264' 
	},
	{ 
		title: 'Parks and Recreation S06E18 720p WEB-DL DD5.1 H.264.mkv' 
	},
	{ 
		title: 'Justified S05E10 720p WEB-DL DD5.1 H.264.mkv' 
	},
	{ 
		title: 'Justified.S05E09.720p.HDTV.x264-REMARKABLE.mkv' 
	},
	{ 
		title: 'Man.Of.Steel.2013.720p.BluRay.DTS.x264-CtrlHD' 
	},
	{ 
		title: 'Road.To.Perdition.2002.720p.BluRay.x264-EbP.mkv' 
	},
	{ 
		title: 'Planet.Earth.2006.720p.BluRay.x264.DTS-WiKi' 
	},
	{ 
		title: 'Hannibal.S01.720p.BluRay.DD5.1.x264-DON' 
	},
	{ 
		title: 'Brooklyn.Nine-Nine.S01.720p.WEB-DL.DD5.1.H.264-NTb' 
	},
	{ 
		title: 'Orphan.Black.S01.720p.BluRay.x264-NTb' 
	},
	{ 
		title: 'Wreck-It.Ralph.2012.720p.BluRay.DD5.1.x264-HiDt' 
	},
	{ 
		title: 'Broad.City.S01.1080p.WEB-DL.AAC2.0.h.264-BTN' 
	},
	{ 
		title: 'The.Wolf.of.Wall.Street.2013.720p.BluRay.DD5.1.x264-HiDt' 
	},
	{ 
		title: 'Parks and Recreation S06E17 720p WEB-DL DD5.1 H.264.mkv' 
	},
	{ 
		title: 'Rick_Ross-Mastermind-(Deluxe_Edition)-2014-CR' 
	},
	{ 
		title: 'Justified S05E09 720p WEB-DL DD5.1 H.264.mkv' 
	},
	{ 
		title: 'Parks and Recreation S06E16 720p WEB-DL DD5.1 H.264.mkv' 
	},
	{ 
		title: 'Parks.and.Recreation.S06E16.720p.HDTV.X264-DIMENSION.mkv' 
	},
	{ 
		title: 'Dizzee_Rascal-The_Fifth-2013-C4' 
	},
	{ 
		title: 'Parks.and.Recreation.S06E15.720p.HDTV.X264-DIMENSION.mkv' 
	},
	{ 
		title: 'Justified.S05E08.720p.HDTV.x264-REMARKABLE.mkv' 
	},
	{ 
		title: 'Killer.Joe.2011.720p.BluRay.DTS.x264-HiDt' 
	},
	{ 
		title: 'Parks.and.Recreation.S06E14.720p.HDTV.X264-DIMENSION.mkv' 
	},
	{ 
		title: 'justified.s05e07.720p.hdtv.x264-killers.mkv' 
	},
	{ 
		title: '21.Jump.Street.2012.720p.BluRay.DTS.x264-HiDt' 
	},
	{ 
		title: 'Game.of.Thrones.S03.720p.BluRay.x264.DTS-WiKi' 
	},
	{ 
		title: 'Gravity.2013.720p.BluRay.DTS.x264-HiDt.mkv' 
	},
	{ 
		title: 'Schoolboy_Q-Oxymoron-(Deluxe_Edition)-2014-CR' 
	},
	{ 
		title: '12.Years.A.Slave.2013.720p.BluRay.x264-BLOW' 
	},
	{ 
		title: 'House.of.Cards.S01.720p.BluRay.x264.DTS-WiKi' 
	},
	{ 
		title: 'justified.s05e06.720p.hdtv.x264-2hd.mkv' 
	},
	{ 
		title: 'The Glitch Mob - Love Death Immortality' 
	},
	{ 
		title: 'How.to.Train.Your.Dragon.2010.720p.BluRay.DTS.x264-HiDt' 
	},
	{ 
		title: 'Million Dollar Baby 2004 720p BluRay DTS x264-HDMaNiAcS' 
	},
	{ 
		title: 'Mud.2012.720p.BluRay.DTS.x264-HiDt' 
	},
	{ 
		title: 'The.Social.Network.2010.1080p.BluRay.x264-HiDt' 
	},
	{ 
		title: 'Club.Dread.2004.720p.WEB-DL.AAC2.0.H.264.mkv' 
	},
	{ 
		title: 'Schoolboy_Q-Man_Of_The_Year-WEB-2013-wWs' 
	},
	{ 
		title: 'Kendrick Lamar - good kid, m.A.A.d city (Target Deluxe Edition) [2012] [320 kbps]' 
	},
	{ 
		title: 'The Cold Vein' 
	},
	{ 
		title: 'Clipse - Til The Casket Drops (V0)' 
	},
	{ 
		title: 'Clipse' 
	},
	{ 
		title: 'OFWGKTA - The OF Tape, Vol. 2 (2012) [320]' 
	},
	{ 
		title: 'Nujabes - Metaphorical Music' 
	},
	{ 
		title: 'Nujabes - Modal Soul [320]' 
	},
	{ 
		title: 'Danny Brown - Old' 
	},
	{ 
		title: 'The Glitch Mob - Drink The Sea Remixes Vol. 2 (2011) - MP3 320' 
	},
	{ 
		title: 'Drink The Sea_ The Remixes Vol. 1' 
	},
	{ 
		title: '01 Local Area Network.mp3' 
	},
	{ 
		title: 'Justice - A Cross The Universe V0' 
	},
	{ 
		title: 'Jay-Z - Kingdom Come' 
	},
	{ 
		title: 'Outkast - Aquemini' 
	},
	{ 
		title: 'Outkast - Stankonia' 
	},
	{ 
		title: 'Speakerboxx' 
	},
	{ 
		title: 'Outkast - Idlewild [MP3, 320, 2006]' 
	},
	{ 
		title: 'ATLiens' 
	},
	{ 
		title: '1993 - Undertow' 
	},
	{ 
		title: 'Tool - Opiate' 
	},
	{ 
		title: 'Broken Boy Soldiers' 
	},
	{ 
		title: 'eMOTIVe' 
	},
	{ 
		title: 'Gorillaz - Demon Days' 
	},
	{ 
		title: 'Deftones' 
	},
	{ 
		title: 'Insomnia.2002.720p.BluRay.x264-HiDt' 
	},
	{ 
		title: 'Lincoln.2012.720p.BluRay.DD5.1.x264-HiDt' 
	},
	{ 
		title: 'This.Is.the.End.2013.720p.BluRay.DD5.1.x264-HiDt' 
	},
	{ 
		title: 'Captain.Phillips.2013.720p.BluRay.DD5.1.x264-HiDt' 
	},
	{ 
		title: 'Pacific.Rim.2013.720p.BluRay.DTS.x264-HiDt' 
	},
	{ 
		title: 'Modest Mouse - We Were Dead Before the Ship Even Sank (2007) - [MP3-320]' 
	},
	{ 
		title: 'The Glitch Mob - We Can Make The World Stop' 
	},
	{ 
		title: 'Death Grips - The Money Store (2012) [320]' 
	},
	{ 
		title: 'Ratatat - LP4 [320]' 
	},
	{ 
		title: 'Boards of Canada - Tomorrow\'s Harvest [320 WEB]' 
	},
	{ 
		title: 'Rush.2013.576p.BDRip.x264-HANDJOB.mkv' 
	},
	{ 
		title: 'Run the Jewels - Sea Legs (Dave Sitek Remix) [MP3-320]' 
	},
	{ 
		title: 'The Glitch Mob - 2010 - Drink the Sea (320)' 
	},
	{ 
		title: '[2013] Childish Gambino - Because the Internet (320 CBR)' 
	},
	{ 
		title: 'Zero.Dark.Thirty.2012.BluRay.720p.DTS.x264-DON.mkv' 
	},
	{ 
		title: 'Mac Miller - Watching Movies with the Sound Off (Deluxe Edition) (2013) [LAME MP3 CBR 320]' 
	},
	{ 
		title: 'Eminem - The Marshall Mathers LP 2 - 2013 (CD MP3 320)' 
	},
	{ 
		title: 'Ab-Soul - Control System (2012) [320]' 
	},
	{ 
		title: 'Thank.You.For.Smoking.2005.720p.WEB-DL.DD5.1.h264-HDCLUB' 
	},
	{ 
		title: 'Lawless.2012.720p.BluRay.DTS.x264-HiDt' 
	},
	{ 
		title: 'The Conjuring 2013 720p BluRay DTS x264-CtrlHD' 
	},
	{ 
		title: 'Prodigy & Alchemist - Albert Einstein (2013) [320]' 
	},
	{ 
		title: 'Looper.2012.720p.BluRay.DTS.x264-HiDt' 
	},
	{ 
		title: 'Yppah - Eighty One [2012] [320]' 
	},
	{ 
		title: 'Billions and Billions (2010) (320)' 
	},
	{ 
		title: 'Cake - Showroom of Compassion (320)' 
	},
	{ 
		title: 'The.Dark.Knight.Rises.2012.720p.BluRay.DTS.x264-HiDt' 
	},
	{ 
		title: 'Cage the Elephant - Melophobia (2013)' 
	},
	{ 
		title: 'Hell Hath No Fury' 
	}
])
.config(function($routeProvider) {
	$routeProvider.when('/torrents', {
		templateUrl: 'torrents/torrents.tpl.html',
		controller: 'TorrentsCtrl as torrents',
		resolve: {
			torrents: function(TORRENTS) {
				return TORRENTS;
			}
		}
	});
});
