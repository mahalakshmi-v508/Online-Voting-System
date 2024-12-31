import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TVK from '../../../images/icons/tvk flag.jpeg';
import BJP from '../../../images/icons/BJP_flag.svg.png';
import INC from '../../../images/icons/Indian_National_Congress_Flag.svg.png';
import DMK from '../../../images/icons/Flag_DMK.svg.png';
import KMDK from '../../../images/icons/Kmdkflag.gif';
import AIADMK from '../../../images/icons/AIADMK_OfficialFlag_Vector.svg.png';
import DMDK from '../../../images/icons/Flag_DMDK.png';
import tvkSymbol from '../../../images/symbol/Indian_Election_Symbol_Elephant.png';
import lotusSymbol from '../../../images/symbol/Lotus_flower_symbol.svg.png';
import handSymbol from '../../../images/symbol/Hand_INC.svg.png';
import risingSunSymbol from '../../../images/symbol/Indian_election_symbol_rising_sun.svg.png';
import coconutFarmSymbol from '../../../images/symbol/coconut.jpeg';
import twoLeavesSymbol from '../../../images/symbol/Indian_election_symbol_two_leaves.svg.png';
import murasuSymbol from '../../../images/symbol/Indian_Election_Symbol_Nagara.svg.png';
import "./vote.css";

// Type definition for the party data structure
interface PartyData{
    party: string;
    name: string;
    flag: string;
    symbol: string;
    page: string;
}

const Vote: React.FC = () => {
    const data: PartyData[] = [
        {
            party: "Tamilaga Vettri Kazhagam",
            name: "Vijay",
            flag: TVK,
            symbol: tvkSymbol,
            page: "/leader"
        },
        {
            party: "Bharatiya Janata Party",
            name: "Narendra Modi",
            flag: BJP,
            symbol: lotusSymbol,
            page: "/leader1"
        },
        {
            party: "Indian National Congress",
            name: "Rahul Gandhi",
            flag: INC,
            symbol: handSymbol,
            page: "/leader2"
        },
        {
            party: "Dravida Munnetra Kazhagam",
            name: "M. K. Stalin",
            flag: DMK,
            symbol: risingSunSymbol,
            page: "/leader3"
        },
        {
            party: "Kongunadu Makkal Desia Katchi",
            name: "E. R. Eswaran",
            flag: KMDK,
            symbol: coconutFarmSymbol,
            page: "/leader4"
        },
        {
            party: "All India Anna Dravida Munnetra Kazhagam",
            name: "Edappadi K. Palaniswami",
            flag: AIADMK,
            symbol: twoLeavesSymbol,
            page: "/leader5"
        },
        {
            party: "Desiya Murpokku Dravida Kazhagam",
            name: "Premallatha Vijayakant",
            flag: DMDK,
            symbol: murasuSymbol,
            page: "/leader6"
        },
    ];

    const navigate = useNavigate();
    const location = useLocation();
    const voterid = location.state?.voterid;
    const [hasVoted, setHasVoted] = useState<boolean>(false);

    useEffect(() => {
        const votedVoters = JSON.parse(localStorage.getItem("votedVoters") || "[]");
        if (voterid) {
            setHasVoted(votedVoters.includes(voterid));
        }
    }, [voterid]);

    const handleVote = (partyPage: string) => {
        if (!hasVoted) {
            const votedVoters = JSON.parse(localStorage.getItem("votedVoters") || "[]");
            votedVoters.push(voterid);
            localStorage.setItem("votedVoters", JSON.stringify(votedVoters));

            setHasVoted(true);
            navigate(partyPage);
        } else {
            navigate(partyPage);
        }
    };

    return (
        <div className="vote-container">
            <div className="tabhead">
                <strong><h1>GIVE YOUR VOTE</h1></strong>
            </div>
            {/* <table border="1" cellPadding="10" cellSpacing="0"> */}
            <table>
                <thead>
                    <tr>
                        <th>Party</th>
                        <th>Name</th>
                        <th>Flag</th>
                        <th>Symbol</th>
                        <th>Vote</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.party}</td>
                            <td>{row.name}</td>
                            <td>
                                {row.flag ? (
                                    <img
                                        src={row.flag}
                                        alt={`${row.party} flag`}
                                        style={{ width: "50px", height: "30px" }}
                                    />
                                ) : (
                                    "N/A"
                                )}
                            </td>
                            <td>
                                {row.symbol ? (
                                    <img
                                        src={row.symbol}
                                        alt={`${row.party} symbol`}
                                        style={{ width: "50px", height: "30px" }}
                                    />
                                ) : (
                                    "N/A"
                                )}
                            </td>
                            <td>
                                <button
                                    onClick={() => handleVote(row.page)}
                                    className="vote-button"
                                >
                                    {hasVoted ? "View" : "Vote"}{" "}
                                    <i className="fa fa-hand-o-right" aria-hidden="true"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Vote;
