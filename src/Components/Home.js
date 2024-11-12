import React from "react";

const Home = () => {
  return (
    <>
      <div className="home">
        <header className="header">
          <h1 className="head">LOST AND FOUND</h1>
        </header>

        <main>
          <div className="about_section" id="about">
            <div className="about_content">
              <img
                className="image1"
                src="data:image/jpeg;base64,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"
                alt="image"
              />
              <div className="container">
                <h2 id="what">Lost & Found Tracking Made Simple</h2>
                <p id="para1">
                  “Misplaced your items? No problem! Moringa Lost & Found lets
                  you report and track lost items with ease.”
                </p>
              </div>
              <img
                className="image1"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSh6om0qMjGENYqqbDhxsBXdnSVFW8vmERsg&s"
                alt="tracking image"
              />
              <div className="container">
                <h2 id="what">What We Do?</h2>

                <p id="para1">
                  At Moringa Lost and Found, we make it easier to reconnect with
                  what’s been lost. Whether you’ve misplaced something important
                  or found an item that needs to be returned, our
                  community-driven platform helps you track it down. We provide
                  a simple, secure space to post lost and found items, search
                  for belongings, assist others in returning what they’ve found,
                  and offer rewards for those who help reunite lost items with
                  their rightful owners. Our mission is to make the process of
                  reuniting lost items quick, stress-free, and rewarding,
                  helping bring peace of mind to everyone involved.
                </p>
              </div>
              <h1 className="head">ABOUT US</h1>

              <img
                className="image1"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGCEaGRgYGB8bGhobHSEeGBofGhodICggGx8lICAgIjEhJykrLy4uHR8zODMsNygtLisBCgoKDg0OGxAQGy0mHyUtLi8tLS0tLi0tLS0rLS4tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAFBgMEAAECB//EAFAQAAEDAgMEBgYGBgYJAgcAAAECAxEAIQQSMQVBUWEGEyJxgZEyobHB0fAUI0JykuEHUmKCorIkM0PC0vEWNFRjc4OTo7NEUxUlZITD0+L/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEAQX/xAAwEQACAgECBAMHAwUAAAAAAAAAAQIRAwQhEjFRgTJBcRMUIiMzobEF0fE0QlKR8P/aAAwDAQACEQMRAD8ABbdwLbRYOUZlOAJIHNJM+GnjXe0llLDi0mFJEgxO+NKHbS2bh2hh3UuuOZnkhJU5KBqSd4NgRu15Vf21iEfR3O0PR4igFbGB52ELdUqblIAQI5xrfjwNVMWzlGXcEx5/5Uc2NhSZUT4cOXh8eNUtuMhKjHDyoBmZRIT3D2UlbOEqY70etSfhXpOz8HKWzxSn2CvPtjtyWzzbjwyzQDTiHA2grOgKZ7ioJJ8JmiDbIMWukmO4iD7vKq23mP6O7A3D+ZNS9F3+sYTm9NHYX3jQ+KYPiaA1tJiSwm3aeSPMGguztsuYBwyhS2VwVo0UFRGZE74sRvgaUy7ZTBw1gQcU2kgiQQc0gzrat4wFxX1eEQ4kWzllJBIsQDloC1hOk+CeAKcQ2mdyzkI8FVK7tDDi/wBIZj/iJ+NLOI2GpXpYZCPuYST5FAHjNQf6NNj/ANE+4r9tvIj8LYCv4jQF7bPSzCNA5Fh5e5Lek81RAHdJ5UstZ3VKed9JWgGiUjQD51NNnRfYpOLzLwobT1Kx/UwkHM3Fym511vrU3SrZjaX2E9Wg5kufYG4tR7fWaAV3W4WxwLojyNGtoulttSxfKUkjiMwn1VV2uyEnDGEpAfSCYAAEK8hU/SBxs4dwdYg2FswM3G6aAlxuEDqCiAoESnvF0+encTQbZCx12SJQRpcbiRp3UQ6MbSaLISpxALZyCVASnVMX3C3hUTSUHGShQUDJGUgi6XCRbS4NuEUATGGaP9kJ++v/ABVpeFbH9kn8S/8AHUrzSurXkBCsqimLnNBiLXM7qHf/AAjGH0nX5+4n/DQA5DancQplFjmVJNwhAJvxMCBzJHGmZrAsNpulJA1W5BJ757I7hFC+heFUPpC1nMsqSknfIGdXmVJ/CKrdM2i4ptv7IBWRxJOUHwAV+KgC+M2Q26nshKFfZUkdnlIFo5i/sod0aSVrebdSQpvKkiSIMrnQ30F+6pehKiWFI16tfZ+6QFe2aj6QbPCn1qClIUWEklKimSkrTeCJhOQUAbVgGv1f4lfGhnSFhLTC3EIGZKZBv8YNXdhPE4ZgkyS2mSTJJjed9Km1MJKHllSyescABWqIzKHozFh7KAYE4NqB9UkyP13P8QrtGEaP9kn8Tn+Ou8Mnsp+6PYKF4pp4uuZH1pgiE9kp9FJNiOMmgLT+zkfYJQd0nMk989od8nuNCsYpSAsEQoCeIPAg7waJbJxynMyHAA4nWNFDcRw5ju411tzDZmSd6SI7iQCPWD4c6A1gG0raaUUJu2km2pIEnxrbrKQlX1aBb9QCrOwmv6Phz/uk+wUv4jo5GdZaM5iqTp6UzrwvQEWzEdtX3feK42insOCYuLnd2k1b2UIcV933iq+2U9l3vHtTQA8HFQIdMQI+rTpu3VumHZ7f1Tf3E+wVlARbQCcSgIaA6hn7UdlS1qCQE8QATccaWkbLQFAEAQdZ/OmZOKYbKGi1AUbJDj+WZt/awDNVdtNZXEIS4sNvbiqVIIUnMJi+oIVrqDN5AJ4IhKYkGO72TUWKwPWKWYkZB6yQNPOKIbG/R/1rLbpxuIGcTAO4mqPRRGTNmcWsqNusvGXNGqhEg3oCh9K2giycQQkWH1SLAWF8vrqTZ+AyNJyhSii+msdqBundTNi8KkG60kkaBuf/AMlTbJwAf61pS1N5ENqQ412FXUqbnNB7KfM0Auv9IkOpLQYxIK4AJbAGoJmFE7qspfOFcLgYfU0tICglEkKHoGJ0IJB/dqDauzlodytYvFrTGueTmCiCJA7t3GucGHEKKlOYpfYUIcUSATBSQIF/jUeKPU7wvoElbU+lltCMPiElLqXCpxsAQgKsDmIzEkRMU1dDttYRhgtvYpppYWZStwJN76E0q7Lfw8lWKxKmxNmuuUg2gyZNh3X3yKs7SwOxXrkpCyPT69SlW5LUoHyqVnKH4dKMB/t2F/6yPjXP+k+A/wBvw3/WR8a8Xd2Rh85QleHUkaLKglOhg6kzbQTodRqZ2Z0f2UTmdebdP6rZCEdxKe0fDLSztM9OV0kwH+3YU/8APR8aVOlGOYfxOGDDzbsJczdWtK8slsjNlNpg68KVNo4PCfS3SllAa7OSEdiyEgxaD2pnnVfE4xll2WkIQFhIBSkARJk277xew4VxNMOLXNBXpVhvqkSJBcgyLRkXel7C7NaSQQ0gkXGv+VGnXmlWVimlR94xb1WProcnaLZcySjJmy9ZEp758NK6cJ17GS6cy2gT8am2TswNPoSEZZMxBH9k9x7qsJwCFb0q7mVHn42qpgFLQ+lfUqSgK9INkAjI8mdNDmEHmKjxx6kuGXQaFoCUySAAJJOgG8k7uNUF7aws/wCsNfiFaxG221NqlQCSMhO4EiIPnpvqm3jsICAHUgnQZU37u1UiJb6IQpD5EEF7MDxBQmD3Wqj0qZh5JOhbjxzK+NVth7WQziHECepWkBKosCiY5XBPkBV3bmLbfSmFpCkkxOhB7uY9tctHaZ30HZ7Lp3FYHqk+0V1t0gYlKZuWCPMrUPHsW761sXGNsthvOCZKlHcSY05AADwmBMUKxm0C5iHnIIA6sIkRKEFWYxwJUrwrpyg/0eROEY/4aaA7SVLakcXXj+FRF/xUS2TtIN4dpCjCkoAPIigL+JCy4UyYUuABMlTilHvtFLA2YBqWmzxQn2CqjiIdX+7/ACJqHC7UCGmwvswhIOYERYazWg6hxZXmX2okIA3AJF78NYrlgzZWFl5SxoBE8yQR/KfKrW2yEsLJ3wPNQFXsA6hSQGwAgEwAZvvJP2lW9wAFqB7axXXKLbZltqVLUNCsAgAccup5xwroDuwGZweGP+6T7BQfaO3WCHWh1maSj+rMZpy+lprvo30afjCMDd1YHupT2wSk5RacTJ8XSAPKfVQHLJQ26QtaUgp1JgajjUO03EqbcUkgpOhF9CN9HsfshtZlSRbSRQrbGFCGVJAAA8taAkwSfq0X+wn2CsqbBN/Vt/cTv5Ct0BWbWgrAKUlUZgSJMTByk6GhOOLpxac4CchGQC4KSQQqbSFcfDUGqq1YhxaHAjKWxbKlRnjNt+lXTtF11bQdaS2EOD6w5k5QTBBKoEEkG+l+JkD0/oRjUuMdWICmlFJHIkqQefZIHeDQ3anRJ5DinMNlWkqzZCoJKSbkAqgFPC8xAgxNLpxS2XA/hnGgtIhSS4nK4n9VXav3i4OnNs2R+knAL7LxOGcGqSnOmeS0C47wKAosdHsapUhkD9pbiYHOxzHduNFE7GVh2l5lFTi4K1+ik5ZCUpt6IkmdSVEwLAED042WLnFo8JV4QkTSb0u6eKxIUzgGnIg5nlggxxbRqPvHyGtAduI+sPfu4ySffXC1WOon594ratTbfu08CLVzmEfM7/yryZ3xM9SC+FCn0oALgjTKqP4Le2o0qhAtU3SIAvInXKr+4PnvqNQ7CQdfXXoYvAjDk8TBu0JUptpOqj7iPYabdmYJLScqbwInjOs+2gGyGpxU/qoUR5ge+mhaAB31m1M91E36HGqciMIzE0M2xgQpCgkSRpbXjMe2p2cSBinGwBAw7S/3z1alTffnjwFXkHjc/PDnVcrxyVGiLjng7Xm0IGzULdV1YkAm/qHur0fY2yENRAuBckeocOQFLWzMJkedje6RysEq/vU67Pukcbbr7rx4VzXZHVLkYtLBJ78y8EEgCZO7v41TezJy28R3bqlfeS0krcVKTEJA33Nie6d2+ocBthp8lIBQdYUBeL2IJvy+FealKuJK11o27XTe5xjtloeQcyQFERmAvwg8RxBtXmOPwK2cUhC9zgjhEjfXrj6RcaeOl/WTSF04aClJURooCbXkKO624DyrZ+n5pOfB5GbV41w8XmVcO4IFWWZ4e2l4oCHGikRJAMCNbUysIsJO6vTmqMkHZpIi/wA/Culskkc2fatY91DtvtZlMpNwG5HeXHAf5RUuysQEq6kJynKVWiDJgzpw5zVkUVTZXfcUrIhNi4QO4an1U7bIwKG2oCYgEW1Itc+vnSlgY+ksI17MA8wnWf3ae2WjkMa5TB4SIH+QqE/JHCPq7CUiDqDpfdS79G+ivry2Rlzt8RJiBxg+oit9CGsQgvpeDmUKTAUZGaZJ3zaLirfTJwDqkj08iybR2SU5P5FVyt6OoFbJwr7v1aVlDW/LZR4jNw7qaFbHQ2ypKBAyEd1taF9GHylMBsq+1ZQFpI380miG1OkrKU5Sk9pO7UTIuCE/PdV5WwUMXjGAGUIYWlNgo5777wQPAVNgglKkO4jKO3mXIlIJk6GbA1pzpJh1aB38CI8T1lV8FtRnEvIZE9tUXy3sRFlH5FAPhQggw2kx+zST+kLIWWSlIBLoIITHZyqGsd1F9h4g5Dh3CQ4yYCt6mz6B8PRPcONDOlTWdvCoO5SUnxSR7qA5wA+qbt9hPsFbpfOwlCwecA3DObVlAUw/aQq9pg8NabtnYdDwRmaQ4pSQBmQFqNpgSCdJPmag2ptNbrKmhh8UCop9JhQEBaVG4ncDXfRl1LLrCnVBCUOFKiuwSS2oAEnS5A8aAZML0QQf/SYdPNaUD1JBPqohhv0d4U/1iGzyQylP8Rmfw0y4NaVDMkpUk/aSZHmLVeLZUIStTZ4gJV6lgigAuB6EbPaIKMI0VCCFLSFmd2tvVUPTR5tnDrDjrbYKDlSVJTJgxCbT4Ue2NgXGlOF7ErfSrLlzpSnLGbNZAAvKd26vPenPRxRxOKxPUhQcHZWACYDaEi+64PlXDpRSCJjTX1fnUL6bGTb5A+NSKTCt2vst7qhg+sA33aHvrypeJnrQ8KFjbaB16N0JVpG7IPjUUTAsJI9/xq1t1uHm51IXJO4Et6+dU3nAQI4jyr0MXgR52XabJOjV8SpW4tnX7yJ91NLjE+ApX6MnNiVi/wDVq/mTu8vbTVjMSWxMTfy8h4Vg1V+1pdD0NG6x2+outJ/p7wt/q7Qt3M6nwowpoj299DcO5m2gokQDhmiJ59Ufj5UXwyypKs4iZGXlJA3cK7qG016I7pZ1F+rFtrEfXOomFJWFd4UlAMfh9dNuynybTuE30rz7aWGUvGOFswRESQBGVI1NHNlbbLKgMQCi3piSkzAHhy9VT1GJygnHoZsWRKbT6jrtLZvXtZJKDEhVjB0vx1P5Uku9H8dh56s5xqFNxmEGZgjj76ddn49DiQW1BQ5G5+FXM1xb5+FeXj1OTDcfLozbkwRyfF90eXHa+KJg4pSV6FK0ZT7TfT5FRuB1ZCVPZklYJ7MSU6b++vR9ubKafBDiAT+tHaG+xrzrGYdeFdSlRzJKuyqbwbQfb516ukz48nKKTMOfFOHN2ipjkAOtAfrp9opswrQ6u8/Z9YpX2n/XM/fT/MKYcMshMcQONaMu6RDDzYO2wmXWh/uR/wCV6qhGXFf8k+00Qx6frmv+AP8AyvVVW3/TADvYPtNWookUl4hQfaU2CpxK0lKBJJjcY4+816qzMdpMG5KSANbiQN+vspZ6DbGDSQtwfWOoKp3gaATu50zOLk63kxzGu+qpu2Ec4lxDSFOLMJSSVW9K025mwGmo415vtPa5ccW6swXDpuCbZEjfYC5HMnWvS9qYZDrSm1jMFAp0uJAvrrIpP6C9HCXi5iE9luW0zoTF1fhgeJ31KNVYZd6EAlRtoAJmxupcjzHlRNptSNrsxottwcvRn5/Ot7Mw6WsSttAypypVEzBVM/lXWJV/83wg/wB07/KfgKtXIiwF+kPZuJcxSy1h3XElpIzJaUsTe0hJANOLufqsMlRVOZrMDxy3kcZpf6cdLcThH+rZQ0UdUlZzpUTJKgdFDhRjH7USjCsYp0wn6lxcAx2gCYFzEnnXThmJ2alOJDpOUNoJURpBmx74nw7qWf0gPKThGHkdlRUlYI1EiR5UbX0mwLiUhWISQe0uAq53JNvRED8I50rdMtqsP4JtllYcWjLKUgki0W46bp3caA7Q4CATqQN/KsqiyVFIISYjdG61boBkYdeLTaOu7ZdydZlTMduLRl3AVXStAS4MSFrK15woNEpWFJSRIQCAqBJEbxUEqDaL/wBofA5XBNqZdmtfWocmMqoHcWUmgE1xvDIJWx9KYVxaS6gepIiiGB6b45n0cSp5O5L+FUrzWkJV66cOmDgLDfaJHXJn8K1e6pejOCbW0pQabUC6YKkJVYBIsVAmOVcs7QJ2Z+mAjs4nArG7O0SBMExldA3A/a3VY2n+kPZ2JYcCHihZbVCHEFJmDbMJQfxVT6Q4BCXn0pQlASUQlKQlIPVpVIAEA9o350Z6XKhp/spGVC/sp3AxuqDkiSixbeeTmUibg/lwrgriN+8c5PyKifaHWEz9on3+NTrMDut7a86dKWx6WPeO4tdJG3FOIWhBVlmY4EDjvt3VXW6uIOGVI/aHhv4UyuHNbiR6qhxqBHj86acatjncUlRTPCpNsDdEgRiyS2UAtqyzfej4jzpwUgcuJ4XpTYxKWn2c1gpTiDw9FlQA4XgU14hINlCx8Ld4rNq95KXVGnSbRcejADbYTjXFTKU4RoW11aAPMwPXV1xQUQd1jz4+4V0nBlOIU6VJKShKAB6UJuLRxtPCusWqDJ0sfjTLNTkq6IYoOEWn1YrOYFLjri5UFZ4kEzAQ2bRvuaMYHozIJ+kOjuUYkiY15Uv7M2kFPOjNAKsyTy9Ex3gJ+Zpx2djzYHThwEcBqTV2qlliqizNgWOTuSFfHYE4dSQnOlybrBib6i+hHDQ66097Bxa1spWq6pjMbZgN5jnbwmp3mUuRnbStNrKAMDXeONzVlegj8uVq8vVar2sFFrfqbsGn4JNp7dDheIMRb20udM8OleHKo7SVJUI3dtCP7x86Pk+c0o9M8cAnqU3UpaR+6FBRPnl158Kl+nxbypoatpY2LGKu6yf94n2imHDJsDyFAccmHmh+2n2ijzCrDuHGvdmzy8aplbaCofZ3fUgf916oMYyv6TnynKGCCqDE3tPGpdsCHmDP9iD/AN14VdxGWW4T6eZJI+7mvu+RVl7FbQ47PblItOVAEmNw4af58qX+kXSA4Z9gFAKDC3DBnJJRAjuk0W6N7TS7h0K1sJB0sYPiKrbb2Szik9sKCgVBKkmDlmY0II/ztVS57nA6oJydgyIkbwREeW+uUuBOUqMJiVKtwAudBw+Nc7Ew6UMpbBOVKU3Ub8PZHlVxpIKUAdx8/Zp510C30fxodfcdj+sMgRolMoSI4wn1110nZ+uDyHltOMphBTlPpggjtT+qfM1xgmEt4hSG0BKABAn9bMoxwgnSoOloIClDQ5ZAvoFXPifVVyIMWceQ8ouPrecXATOZKbXgQEwbk0dw3RjH4llLTjy28NlACXrQE+jkbSkLURAiQE/tU69GGMKlpLmGDalZRLgVnUFEDN2r9XeRCY7iaW+lm2dpDNkaDLUmXW/rlEc1xDfikHgakcCHRbZ7eBQ/hkKLn1wuoAG7Ta1EpBMDtRF9RxqJ4LupvKlKiQDBUpxXG2iQd/AGBESE6HPdt/6xS1FCSFFRUSVBAJk3J9EeApkfSUlKYACSI5D0fZQC7sDC/UImJ7U/iNZVLZ+1kNICFG4Kp/ETWUBZYdSp1DWZJWHJyz2t5010o3hARjuV4n/hJHuodhcZh+s6yCFHflGt43zVfaO1nUudew1mIVopQAUnLk3KkcY5VwHoruFS8AhxIUkKzQCRcAgGQeCjbnRrZODQ0jI2iEyTBJNzzJmvOtn7a2mpC1owLTmQwpKXDn0mydTbhNdYf9IeMiPoLQItBfymdNCmoskPW0dhsuLWtaTKyCqFEAlICRbuAoP01ZJwuIVP9i4f4SaFo6ZbQOmzmz/9yke1IqjtzpFtB5h1pWzAkONqRm+lNmMwKZiLxOlVvmTQGcxQKirtQd+RWmusVVO1monNre0zx4UYShQEQkHLpO+BPtH50Jw+wVpSlJIKgAO88pE1lfBe5qTnWyKx2m0JOfwg39Xxrg7UbUPSFu/4a/nVxWy7wSfV8KxOy8osddePHh41xuAi5oU+kcuZMoUYUokwYuEAXjflo3sXaDqgkPtOkgQFgEjvOW4J0nl4URxLacOlSldoAXy30BNpAvY791Bz0gaUAUqfbVdPZyKzSoqAUlUgkTrrVirJCku5DicJ3fMPuNMZfRcHcFz5C9L+2NoqWgIbQsNESVqBGZIMWm8TvoqxmWJeU+UGOwerQD97IZi2kxyqHpRtAFMBlSUBvICAITeRMGwtrVeOMVLd33LZym48q7C+ej74ClBtxKgZBymIgGdO/wBdXdlbUUcqFNrndlSSCeKYvpTR/pnh3QpnI520KSTCREpM/asYndVRCsM2pLuV8ZVJUBKIsQoC1oq3JO9pIphGt4sIMY5xKYDbk2AltQtztHOuHekLbasrhKVR6JSQqIN4/KrmK6TJISnI6jrDlC05JToCe0SBEjcaWE4LBJlZTi1KNyVONlRJEmSBM851rF7tilvJf6NSz5FsixjelKoPUtLJNu0kgCNfK3woRhMGvrCt3MXNSIOl48J+N6IPJhxaW0dhKhlJIJIWhKwSd8+8VfcxClOFYQTmSAACmSU2teL2i9aMcY4toopnKWTeTFvaTRDzRymM6d3O2vOi6MQuLhz8B4X0HsqnjNo9YpgoSq7iCNL5VTx50eXtAhMhHDeNJvv4Vc3dWiuO10AtpArdZASuQzl9FQNnHVHdJgKF+dEFYVX9FlJBK3BcEGzatx5VcRiFLXZo52XFoMwYI7CxYm2aDP7NW8VhcQtTKw3Ztajci8oUiPXSWWtnscWNvdCds7FO4RSihJW2o9pF7HQkHSd16bcP0pw6kSesQYIhSFbxutB1qbC4daE5VtEKlUxBFySIJIm0evXWpV4VRt1a/DL8alxxf8kPZsC4rpilCSGm1rXFipJSkRca3PdVzo70xQ6oIW2sOXJATmBvqIGl+FRYtAAMsvkDXLkOXvAM+o6VmxXGELDqEKJggEqTabKsIvaOV6sVEGmG8Wn65twBQzgiCCD2cu4x+tHhUO2MIp2GmxmWU5gJAskgEyowLqGp31YxWPDrrKRbKhSiDuzFIT49lXqqHEnI8l77TY/hWpDRnkMwV4VNEWJ46MY1tWdhp5pf6yJAO+8aj1GiA6ZY7CZBjWcwWJQ4mErItfsyk6i0A8adMbjVgBkEyowfu749dJH6Rdnv4ksqaaccy50qyIJCQMpTMCAScw55TwqZEu4baCXi5jsMhSsikpWjKEqUhTaQuALZgpIVzKedHmtpNPgLbWDx9hkapPI0F/Rhg3WGn0vtON5lJUMzarwCDujhV3auDwUl1wAEaryqTb9ogUAn4zZqVLUrieJrVG05SAU3SR2e7d6qygCLFogADuHyak26oDDPLAEhEpMCZPIRPcf8lBnDuOypx1wnkspHgAbVcfxTqGlMyXEuQO0e0m4JIV9oQDY+e4gehdE9t4fDuPNPuJaWtYUkrBSgiMoHWEZQbaE027R2WziLuISVEWcT6fLtaKHCZFKmytiN4oOKWSEhQQUwJMJCtSbelw3U0bF2YxhEFDKMidTc5eZMnKO8AVBkkL+L6GvoMslDiT+tCVDvmx7wb8BVTaWxMYgSUJ8Fp+NHcd+krZ7S+r6xTqhr1DZcSnkVDsz3E0H2z+kjAuIIHXA/tMLHuquWNMmptAhqcqJEKygm4gHKAPXUOIIJMQAZ94PfUjZDjaXEkwUJImwgj3+4WrZQCSRy4d+/yryZupv1Z6cI3BehWaYEG2gsfzsdxFdHDmCZtBty3x5eut4zEtMJzOKSlObUyfGL+XKqDvSXCkDK9PgZ56iuLjlukxUY7NkfS1qGHLyQhQP4CfHfS/0Q2WlLaXVQVLBInQJkj1x7KLdJduYZeHcCXQVEEAX/AFSBf51qPZKYabREQ2kEc4BOn7R9fjWrE5rA1LbcpmovMmugRVlyDrDB5kC5vBPH86zFNAymfSGnl+R86EdL25YnQ50jzCyb7vRB+TU+ynlltuQm6EmT3JVbW/aNUvHUFOy+OS5uFC//APDS1jWwPRUFZeUJNueo86Yn0kHsiQLcDpvGt+6q+10fXNEi4WYP3m1T60iO6ibSMqTPfe48OWnnU8uRuMZPoQhiqU4rqUNpODMxr/Wnv9Jobta5fbIQO4eyT86WqPaypWwBYdabDQdpoz88KsrBDcRaLev591qPaMTkVcpFdpXacO/6nn/YIiiDZMWMfOvkR5VRwp7bnc15dQj3xRF2w+fnSpZHuiGNbAnFNZcQiLJLhcTwGZKswHJKp8Iq87pH7Puj2E+VSuplGl0GR3Gyh7PM1E6qJIknd4D36eNW3dEKqwn0bQVYjGH/AOpemI3qPOmc4UETFhNsp3g+v40t9EXgl3Gc8S5p98+6absO8FJESCdxJmxvu9dYtVKSys0YPpoiLEnSY05TwND14iVlkfiywB3741owpSBJUYSBKjNt95EWoeNosOkJQsKIuMpB4CDfd31DG3zoSRMGAUhMiYE246z8aDbX2OFKzswFmBH/ALkXg8+B8NCIZCrJKptYxmP2SaGjHdYbjiRvggjidbVfgnK78iM8akhUw3YeKwkEOQBeDKUpSSREi8Dxo0loPN4hHoksqSbzqpOmmkVHtJlIfAFgolVtxWG1EeZIon0bTLroImUkGdPSFvGvVR5rK2DCnEJeUnspTmUeBSCFgdxzDvihOJ2ehbmEaxCSpLiHlkJMELGVcyQdQTaKOsuBBcwKjBW9mSOLSjmXH7ySDzVVbpEiMfgRFgh4fwj586mQErpWlGHcW20HAnICElyQVGTfsi0gW/zrfSHAYdvCh1tCwo5JzOZkkKjMCMonzo50i2ngW3Cl9sKXlBJyrNrgeiQKHdKWeswoDQEKKMgmLWIuTAtxNdAKb2cyR/qyfM/GsqIbRw/2krzb+xN99wYNZQFvBLjfUuNxYAnckSY5e+iScE2qCUx905fVB9UDlVTpW0G8E4EDKVFIJEyYUFXPh3UAaHTBzDhbbDSFlausDjhISjMlKYUlIzEgjcYvQx513FKH0zEKdTr1TcpaF/8A2wEg6aqnvoW49AkkzeOcbjTL0UaVkU4qJV2QCkKGUaxmnU28KizqCGDRhGkAdSsR+qhIHrXFRYzaeHAMNLPMlsd8DPaiqkFSVI7AzApByIGUkEBUhMiDfXdSPtlMpk2JEkGyhO4jiIg1S42WXQz7POZpBTEFKTzAgHdvqFeHMzNpiQfXpr6qj6OJUppmD2OrTm74G/8AOiamiO69ySfnurx8r4Zy9T1sW8EBOk+AW63CIzWsowNLe6lHFNvsFBWlG9Ihea8E8LWHrFejum0cfdcWpK6ZpCS2Z1WSQNxyq3c5rRo8rtQ8tynU41TmLu0H+tAk21v3U37KSkJTFgkBNwQdI0i2gPnSQ7Zkgi5m86cfHd4nwe8Krfe/51r1W0DPpt5Arpsr6gaTnTfhAc9xq5slI6lAIUPqgNYOg0Phfx1qj01V9RH7af5XKI7OdllH3b90TWWf9PH1/c049s8r6fsQbSR2mwf10kHX7LgPtow6zeU7xJ4xz3j55UBxryVFKpkZx6swgjUa0xJdynwtPDkeXhWfNajHuXwpyl2/AubXIDuGiP6yfW1r+dXVOWgmxGkbotvvymq3SQ/WsE/+7oBG9rXjaaurTKUgC5AM7t0Rw7jrNWyfy4Mrx+OYPwIHWO8fqh5NIPuojn0uRv8Ah8+FCsKqHHdP7P8A8aAO6rQVB4Cwn551fONvsvwZ4ypFlStRY6+u1crV7/z934aiCtD4+HDzjyrWeAakkcbCXQ5QOIxf/HcP8Zjwp4wxy3zWi9uXfSF0PeAexQJgl9zdayiePGn7rYictxWHW/UZfg+miHbr8MLVJ7KSbcUgm1eabBYDeMYg+kmVQd4WBw316Dt1zMw5P6qxpyUL62vXnex8xxWGI1yR/EkbxxPrrVo18l9/wUZ/qL/vM9RKCfSI9e8mOHH2VULARCkxOlp3zNqlQLaggk3SJAv8iuluQLx4jiPXWaEmmaZchG2ptiMUWymyEphUkyVJQdItGm+jHRvbyW1kkKVIgkG1yOMcNedWMNsdl55alhcmNFQPRAG7gKzpLshphLamwQVEzJBFgI0Ar2oeFHkz8TCmP6UttoS59HfcM5SG0pUsWJmM2ljfupL2302bcxDDyMO+AyFgpWnKTnGWxBItG+iG1Uk4cxvB3bgD52FZsTp1hmcO0y4l4rbBSSlAyxmURCiRuIqwgJ+3sacStToQUSgJCVBSjInelEb/AG1Htfb/APR0tdWpCgEgKVvKI0Eb4r0/pTt5OFUhC0uqLkwUQQIIBzSocRupB/Sw2QtmTNlCfGgCbeHYUkK6hu4B+1vH3qyq+DX9Wj7o9grKA5exOMbF2mlj9ZJUB5XjzoXtXEYh1BDmRKE3ypmSRNiSee6KeE4ZxSZDjZB35D3/AK5FDtt7Cd+jurJbCUJK1QDJAuSNdeFqATdmpU4sJ4mATzPs+Fek4UBISkaAQKTeiuF1XwsO8+8DdzpkeZUtJQkgFQgmYgH0iDxyzHOK4zqCuExSXEJWggpUJB5UA6SspCnJGqSsfvekfx5vCruy8KtpHVqggE5SlQV2Te8b5nzrnpQx9UhZ+ySk9yuPiAP3jUaJWZ0bfy4doSLpT7PjRTrT2REgzJ0g399LuxH8rKBrATw4HTyq6/iCDackwI4GZg8L14mWF5JerPVxzqCKnTrEKDJKFFJJSAUkjfGopGbWXPSKlZSbqWTu4k+FM3THF5mlbxIIgEREaifGlPByZykiVRpPqrfo4cOPcyamdz2LGPQEtwBMDwB0ud8H1iKadnjsk5uEAkaag+sUqPp+rHIC3Dffn30w7EfBZSQe1lAJ5pAGvhU9T4COn8RR6WKPUcs6e+6Vx7avbIksovbILeHCudt4bOw4hM5lZCLW7J3nuUdJ051Yw+VIypuBYbrC2m6qW08SSL4prK2wXtpGVACRAK0cbyfyimjZz2ZAKjfKRwG8e7wpX6RY1KVMgET1iVHuBPvo79JTEARIiONzE7jVWaLljivUsxtLJLsCulb465s7goH+JGngKLIslOgOSTO/fHzehW3MKpxxpSRIzjMeAkEew6/GiK3gQBYwkX4nX1T4eNRyR+XCK8jsG1OTYJas45G/J6kDf4VLij9WuNcioPPKSZ5fGq7b0uPHmkD8KZqYnU6wlX8p9vurZW67GS+fcmwuKC0pVynx4edY2nU8BQfYTlshPon5vRlWkfPz+Vdap0cTtG9grjEr1viljnBUQb7rTevSGsSdDIk8QNONIfQzDtrdfK5lL6iIMTKlAzTXi8OhSuwpaFBUgpV/d04bqw6zhlkp+Rp09rHZaxhK0wJ7ZyiSB6VtPEa2rz7oy2pWJRIIKEQbaEKCibck616Pg8IjLCxntckADhcc/jUODdb6xSEtpSoCZCLEHsjKvQ1DHqFjhKCVkpYuKSlZjLpDAIkqAPO8E7rnwrnEPwEjtTvnuvfdV1RImJ7tNL25/lS61j31OSokJmCNwG/4TUcPxts7N8NAPae0tooxS04QKKYRo0F/YTP2SdZ1rf0zHumMYTCdAWQ3c63AE2qHpFtBRQlxu2dxY5wLe4Gp+g+AS4XnHW0rSkBCQoSCs9tR70py/jNe5BfCjypu5MKqdACZzEZ1DsJUoxkWAYSCYmBOlxSPiNmOLzwhUSRGRYMH7yRups6Z7LQlkONtobKFXyCJCoAJ7iAP3zwFBujm0V9vMqbangOHnUyIyM9OEFCBiWHUvpF8qApJUNVIM9meB00k0ndKC9jnAsNlDaAAgKIJIuSTB1NrTFhfWm5vDgpCiAD3aedvndQ11aFTlWlUWsQYPC2ndQABraD6UhPUJ7IA9PhbhWURcavWqAMfTH9UtDTV1cqP7oHh6dGtu5kbPdCyFOdTlUQIBJIBgUMG1VqsjCurt6SgGwbftGfAJFW+lT6/oBJMLlqctwCVoJidaAE7KY6ttKeFz3m5+e6uH9upQsoDS15bFQyxNiYkjTTvml1O0MUB/WoP/LFc4dk73HJJk5VFMk3PokUA27O2+lbiWy06gqsCoJy6TchR1jhrHGjW2WC4ypI3pgd+oPgYNI7ODGZKg44FJOYEkqEgyJm53WkUUXtnGkQU4cg/fHxrlAobLd7N4H1YMEaGQPjVwPERMG/Aa23xVVCmgkdalanHFKcKWhITKlJiVKk+iTpaYqPE9QkElKhyzCfJMwe+KzS01tuzRHPSqil0gMtqJ8zwmaEbJbSSSTx0PGPdPyadts7AThG2nVJSoO6ZVHMOzn7QUgDS1jWN7GSpouhKQlJMkrAJykpVAAJiQb62NqthDhVFcp8TsWlozCOO+h2zMcpklCjCVHMk7gefIzR/CbMDjTYJIJSLzc2G+dRUqWXWrLaS8n9YQlccwRlV6qk4WqZxTp2jSMQYvyuNDzB7xUDmMSJJULX14VaRjmhb6K/PDIiPPPVvZGG654KWyGkAEAGCSYJ7W721R7si/wB425CNi0qxC1LNgLDhEwKKbOxxUAFekm3hup6w2xm14tlo5YVmIsLlKVLA56THKiu1NgOpcys4ZtQgHOpCl66iEQExG8yZq1wTVFSyNOxEZx4FiRHPly8ajfxeUKUIUSIiZuf1vndam1ezcSFZC3hUqO5Ta02vuK+XqqQ7FxJygpwhJmEpQsk2kwArcBJ7qr9grLPeHR5psF2Qsk3Kpmi7yxkVOmRQ/hI/On/AdH3SuHmEJRkJC0pUkBQIASUrmZEnMDaOdBcf0aQ4t5CTBQoQU7iRmtyBtHKrHC3ZWp0qEBh/q3ybQVGe43HkTFMBXIt8/Pwq+MHiEDtYZlz9oKKJ8IUPXWvoWIcsGm2RvIOdXgYAHfBrjx2FkpUa6FuDrH5H9sozykjlfSm3DkCJiPytaOQpPRsFKHQgTAaCtdTmIJ+eFTu9H3UnM04oT9lXaSfA3Hgaoy6Tjk5WXY9SoxUaHVrFJAKAUkpjTtHeYGmsWqyhZ7MEkb7e2DIv7K83xWGxeU5+qjUkBUgDUiVQDTMnZV4lW7eazP8ATW/7vsW++r/EMKxKkZy4UJhRMnQ2PP5mlbbW3OslCPR+0QIzchfQ3lXO3I+z0cCosDxJv361y3sJKHFjIIgGOdx8KvxaJQdt/YqnqnJUkJe2kgYdkmIlSu7jThsln6Ng09gqWlBcWhIkqcV2ykAanRH7oqt0i2elbuDbgBErWsWAyoCVQeOY9j96o+lXSgYbIEoDi1SYzRAEXJg7zp31uRkZe2YlT+DDeIBC8pbckEGR2cwmNbKBpA2OFJxPVGM2YpVwlEz33FHti9NOud6pxsNyCUnPmkjcbCLTVTabITtBp0EQ4kzF+2Bl9Yj110BXarnYKeIi3A2PqpfCQ24CABPZMCBG4edGNoqtQTELlSb/AGgYoC0ZP2h5VlRyaygLH0/FKzZMSoJBAAyNm2VJ1KZ1JrH3sU6kIW+FJBBILaRJEESRBtrqKqbPVCfH+6miGGVNAQt7PWdSj8BH96amTspW5SJ7j8a4xOPiQEqVGuUWnvMCokbVUL9UuO9M+ImgLzeDWnUpjkn/APqfVUgBFrHu+TUGG2qlZy9pJO5Q94keut4h3KRzPr1oAj0Txmz0h9ONU0lfWqyZ1KT9XAAjKRaQTfeTRl1exFT2sNcR/rCh7XK84bdBzlUG9pvA/wA6lG0UpHopHCWkqOlplJJNAM36QtrsOtsIZebchSrIWFQMqUp0JoM80pOEWsYhwIlSiyEJg/WFJGecwCtSBYyReSTBhtqJUeylIgGcrYQb6bhO+oXHY2cBP2B/MKANDCuIbQCW+wkCylEyAAfs8at4Vl0jMS2U6amRwmE2/KquNekRuqbBYsFKYINhcGgLnV23TvEn/BUrbigQUJSIJMzJ0IEWHGqn0ob65DyeNAWH8xggqSoEKSpJAUlabgi8HuNiLXBq5/prim0w5h5iwW04Eg7v6tQOXwUaF/SI+bVU2nivq4nePbQBVO33HnetUiMqUj6xWYkpKlCwjjFyNKnd6QOoeaf6lKkomUpXlJzIKLSCBEz6RrnZ+I+rTJPojffSqm04krAkH0h/l86UAQxnTjFOiGcOhkn7a3M5HclKQD4mOVU8E+60OwEuZruKcWUEqJJJEJVIMnhVUvNhPZBB7zbj31ewC/q033UByztBZcShTSUhWhDubgLjII13T6q7exDyLhjP91eb1Zc3qoNtJ5RxGUFUwMuWyhoTEDX213hHcWk9tTZT+2IX/B700BWxW2l9d1gQEkIyFJlW/NMykjhEUR2Lt1Tysh6tKoKpUlUQkpB9EqJnMPXUmNxjQEvlGls8T+6fS8qVtgPQ+Dp9Wuf+2fbQDLtDaw6w4dYSrNCczcx2wLQqDooUwbPxWZAn00dhY3had8c/SHI0gbQd/pKjvCm1DjYJnlp7KbdqNLzdazKXIhUgFKxwWAZtuIuKAZmXwoAhQSYuD64uJHKuS4BJBkHfSinbbwsrCOT+wpBSe7MQax3aL7gy5FMg7yQVnjEWT335UBV6ctpfKc05EykEJUrtWKrJBI4TGqTS3hdmNI0zH/kO/wD66aNovwlCUiIn3VRGIjUH3UACxOzm1frf9B3/AAVVVgg0pCmwcyb+gtOkKAlaRrEUyl2qWLVYa6+40BcGJS4kKTooW+dxFVDh7g8L+6hfVuNnM0RBuUHSeI4GpDj3zbq0p5yT6oFAEYrKFHCKN1KJO/tEeoaVugL2G9Hxn1JqzhXNRwv4HSsrKA7EV0EDdW6ygNIb5C0HyqvtF2VoSOavIR76ysoAMpUTPGa0xtNKZAUDvukx7KysoC21tAKBISndMAjfS+3i2ibNKCjYHOLE2mMknzrKygHp1UzVNhlKVBQEGbwYnv4+NZWUBZexBGgm+mlcsYsKJA1GoOo93lWqygLJcihm0MQSDpqBYVlZQBvDu9kdwrpOImeFx5WNZWUBRxCcp1tRDZ7vYT3Ct1lACNouK+kFSIJSAYNpkga1w1tptcJUFIUTESYPcpJn2VlZQGjstskrSSkkXm8+OvtoVsd7K+Jt2VevJ8K3WUAaUGSrOZz2MgxcabuVG3MaTN63WUAKxu0EJ9IxO+591TYd6UgpOu7ce8VusoChth09j749oFdumsrKAoNz1oHI+yt44xHfWVlAV3HFCwSJ+948K4Stwz2U/iI58KysoDYcJ4eVbrKygP/Z"
                alt="lost and found image"
              />
              <div className="container">
                <h3 id="what">Why Moringa Lost & Found?</h3>
                <p id="para1">
                  Your paragMoringa Lost & Found simplifies the process of
                  recovering lost items by creating a secure, efficient, and
                  transparent system for reporting, tracking, and returning
                  belongings. With real-time updates, a user-friendly interface,
                  and the ability to offer and receive rewards, we make sure
                  lost items are reunited with their owners quickly and fairly.
                </p>
              </div>
              <div className="container">
                <h3 id="what">Why should you use Moringa Lost & Found?</h3>
                <p id="para1">
                  If you’ve ever lost something important or found an item and
                  didn’t know how to return it, Moringa Lost & Found provides a
                  seamless solution to ensure your belongings are easily tracked
                  and recovered. Whether you’re a student, staff member, or
                  visitor, our platform makes sure that no lost item stays
                  forgotten. Wouldn't you want a simple way to recover what’s
                  yours or help someone else get their lost items back?
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;