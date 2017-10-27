---
layout:     post
title:      "[JAVA] POKERGAME 예제"

date:       2017-09-01 21:00:00
author:     "신희준"
header-img: "img/post-bg-02.jpg"
comments: true
---

<H4 style ="font-weight:bold; color : orange">2017 - 09 - 01 (금)</H4>
<li>POKERGAME 예제</li>


<H4 style ="font-weight:bold; color:orange;">참고 도서 : 자바의 정석(남궁성 저, 도우출판)</H4>



<h5 style = "font-size: 17px; font-weight : bold;">1 . POKERGAME 예제</h5>

<p>객체 개념을 이해하고 Collections Framework인 ArrayList를 활용해보기에 좋았음.</p>


~~~java

package poker;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Scanner;

public class PokerGameTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Player[] players;

		// System.out.println(dealer.deck);
		System.out.print("Player의 수를 입력하세요>");
		int numOfPlayer = new Scanner(System.in).nextInt();
		players = new Player[numOfPlayer];

		// 각 플레이어마다 기본 세팅금 10000원으로 지정해줌.
		for (int i = 0; i < numOfPlayer; i++) {
			players[i] = new Player();
			players[i].money = 10000;
		}
		int index = 0;

		// 연속 게임 여부에 따라 프로그램을 반복 실행 해줌. 만일 게임을 중지하고자 할 경우 게임을 중지함.

		while (true) {

			System.out.println("계속 하시려면 1 , 중지하시려면 2");
			index = new Scanner(System.in).nextInt();
			if (index == 1) {
				Dealer dealer = new Dealer();

				for (int i = 0; i < numOfPlayer; i++) {
					dealer.deal(players[i]);
					// 플레이어카드 소팅
					Arrays.sort(players[i].cards);
					System.out.println("플레이어 " + (i + 1) + " " + Arrays.toString(players[i].cards));
					// 게임이 시작하면 각 플레이어의 셋팅된 돈 10000원에서 각 베팅금 1000원식 감해줌
					players[i].money -= 1000;
				}

				dealer.checkRank(players);

				// ranking 배열을 생성하여 각각의 플레이어의 점수를 넣어줌 (해시맵 상의 랭크에 따른 점수가 같을 때 패의 숫자 또는 무늬의 값에 따라
				// 추가되는 점수를 합쳐서 비교)
				int ranking[] = new int[numOfPlayer];
				for (int i = 0; i < numOfPlayer; i++) {
					ranking[i] = players[i].rank;
				}
				Arrays.sort(ranking);
				System.out.println(Arrays.toString(ranking));
				int winnerrank = ranking[numOfPlayer-1];
				for (int i = 0; i < numOfPlayer; i++) {
					if (players[i].rank == winnerrank) {
						System.out.println(i + 1 + "번째 플레이어가 승리했습니다");
						players[i].money += (1000 * (numOfPlayer));
					}

				}
				// 만일 게임을 중지하였을 경우 가장 돈을 많이 보유하고 있는 플레이어가 승리하도록함.
			} else if (index == 2) {
				int maxmoney = players[0].money;

				for (int i = 1; i < numOfPlayer; i++) {
					if (maxmoney < players[i].money) {
						maxmoney = players[i].money;
						System.out.println((i + 1) + "플레이어가 가진 돈 " + maxmoney + "원 으로 가장  많습니다. 승리하셨습니다.");

					}
				}
				break;
			}
		}
		// 게임이 중지되고 각 플레이어의 잔액을 확인할 수 있음 잔액확인 후 프로그램은 중지됨.
		System.out.print("각각의 플레이어의 잔액을 확인하시려면 3번");
		int confirm = new Scanner(System.in).nextInt();
		if (confirm == 3) {

			for (int i = 0; i < numOfPlayer; i++) {
				System.out.println((i + 1) + "플레이어의 돈은 " + players[i].money + " 원 입니다.");
			}
		}

		// sort 없이 한 경우(아래 강사님께서 Player 클래에스 Comparable을 implements 해서 아래의 경우를 사용하지 않음)
		// int max = 0;
		// for(int i = 1 ; i < numOfPlayer ; i++) {
		// max = players[0].rank;
		// if(max < players[i].rank) {
		// max = players[i].rank;
		// }
		// }
		// int winner = 0;
		//
		// for(int i = 0 ; i <numOfPlayer ; i++) {
		// if(max == players[i].rank)
		// System.out.println("승자는 "+(i+1)+"입니다.");
		// }

	}
}

class Dealer {
	ArrayList deck = new ArrayList(Card.NUM_MAX * Card.KIND_MAX); // Card[] deck = new Card[52];
	HashMap rankTable = new HashMap();

	Dealer() {
		// 1. deck에 Card를 생성해서 넣는다.
		// 덱을 셔플한다.

		int i = 0;

		for (int k = Card.KIND_MAX; k > 0; k--) {
			for (int n = 0; n < Card.NUM_MAX; n++) {
				deck.add(new Card(k, n + 1));
			}
		}
		// 덱셔플
		Collections.shuffle(deck);

		// 2. rankTable에 rank정보를 넣는다.
		// "straight flush" 는 9000
		// "flush"는 8000
		// "straight"는 7000
		// "full house"는 6000
		// "four card"는 5000
		// "three card"는 4000
		// "2 pair"는 3000
		// "1 pair"는 2000
		// "no rank"는 1000

		String ranking[] = { "Straight flush", "flush", "Straight", "full house", "four card", "three card", "2 pair",
				"1 pair", "no rank" };
		for (i = 0; i < ranking.length; i++) {
			rankTable.put(ranking[i], 9000 - 1000 * i);
		}
		System.out.println("랭크 테이블 : " + rankTable);
		System.out.println();
	}

	// 카드 나눠주기
	void deal(Player p) {
		for (int i = 0; i < 5; i++) {
			p.cards[i] = (Card) deck.get(i);
			deck.remove(i);
		}

	}

	void checkRank(Player[] players) {
		// 각 player의 rank를 체크해서 player의 rank에 저장

		for (int ii = 0; ii < players.length; ii++) {
			int[] cntArr = new int[14];

			boolean threeCard = false;
			boolean fourCard = false;
			int pair = 0;
			boolean straight = false;
			boolean flush = false;
			boolean straightFlush = false;
			boolean fullhouse = false;
			int pairnum = 0;
			int kindCnt = 0;

			int stCnt = 0;
			for (int i = 0; i < 5; i++) {
				cntArr[players[ii].cards[i].num]++;
			}

			for (int i = 0; i < 4; i++) {
				if (cntArr[i] > 0) {
					// stCnt++;
					for (int j = i; j < cntArr.length - 1; j++) {
						if (cntArr[j + 1] > 0) {
							stCnt++;
							pairnum = i;
							if (stCnt == 5)
								straight = true;
						} else {
							stCnt = 0;
						}
					}

				}
				if (players[ii].cards[0].kind == players[ii].cards[i + 1].kind) {
					kindCnt++;
					if (kindCnt == 4) {
						flush = true;
					}
				} else if (stCnt == 5 && flush == true) {
					straightFlush = true;
				}
			}
			for (int i = 0; i < cntArr.length; i++) {
				if (cntArr[i] == 4) {
					fourCard = true;
					pairnum = i;
				break;}
				else if (cntArr[i] == 3) {
					for (int j = 0; j < cntArr.length; j++) {
						if (cntArr[j] == 2) {
							fullhouse = true;
						break;}
					threeCard = true;
					pairnum = i;

					break;}
				} else if (cntArr[i] == 2) {
					pair++;

					if (pair == 1||pair == 2) {
						pairnum = i;
						break;
					}
				} else if (pair == 0 && cntArr[i] == 1) {
					pairnum = i;

				}



			}

			// System.out.println(Arrays.toString(cntArr));

			if (fourCard)
				players[ii].rank = (int) rankTable.get("four Card") + pairnum;
			else if (threeCard)
				players[ii].rank = (int) rankTable.get("three card") + pairnum;
			else if (straight)
				players[ii].rank = (int) rankTable.get("Straight") + pairnum;
			else if (pair == 1)
				players[ii].rank = (int) rankTable.get("1 pair") + pairnum;
			else if (pair == 2)
				players[ii].rank = (int) rankTable.get("2 pair") + pairnum;
			else if (fullhouse)
				players[ii].rank = (int) rankTable.get("full house") + pairnum;
			else if (flush)
				players[ii].rank = (int) rankTable.get("flush") + players[ii].cards[4].kind + players[ii].cards[4].num;
			else if (straightFlush)
				players[ii].rank = (int) rankTable.get("Straight flush") + pairnum;
			else
				players[ii].rank = (int) rankTable.get("no rank") + pairnum + players[ii].cards[4].kind;

			// 동일 랭크일 경우 가장 큰 숫자 카드 비교

			System.out.println("플레이어 " + (ii + 1) + "의 점수는 : " + players[ii].rank);

		}
		// }

	}
}

class Player implements Comparable {
	Card[] cards = new Card[5];
	int rank, money = 0;

	@Override
	public int compareTo(Object o) {
		// if(o instanceof Player) {
		Player p = (Player) o;
		return this.rank - p.rank;
		// }else
		// TODO Auto-generated method stub
		// return 0;
	}
}

class Card implements Comparable {
	static final int KIND_MAX = 4;
	static final int NUM_MAX = 13;
	static final int SPADE = 4;
	static final int DIAMOND = 3;
	static final int HEART = 2;
	static final int CLOVER = 1;

	int kind;
	int num;

	Card(int kind, int num) {
		this.kind = kind;
		this.num = num;
	}

	public String toString() {
		String[] kinds = { "", "COLVER", "HEART", "DIAMOND", "SPADE" };
		String numbers = "0123456789XJQK";
		return "kind : " + kinds[this.kind] + ", number : " + numbers.charAt(this.num);
	}

	@Override
	public int compareTo(Object o) {
		if (o instanceof Card) {
			Card c1 = (Card) o;
			return this.num - c1.num;
		}
		return 1;
	}
}

~~~
