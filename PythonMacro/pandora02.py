from selenium.webdriver.common.keys import Keys
from selenium.webdriver import ActionChains
from selenium.webdriver.common.by import By
from selenium import webdriver
import pyperclip
import time
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.chrome.options import Options

# chrome_options = webdriver.ChromeOptions()
# chrome_options.add_preference('profile.content_settings.exceptions.clipboard', {
#     '*': {'setting': 1}
#   })
# desired_cap = chrome_options.to_capabilities()
# desired_cap.update({
#   'version': 'latest',
#   'platform': 'WIN10',
#   'browserName': 'chrome'
# })
# driver = webdriver.Chrome.Remote(command_executor='https://API_KEY:API_SECRET@hub.testingbot.com/wd/hub', desired_capabilities=desired_cap)
# driver.get("https://permission.site/#read-text")
# driver.find_element_by_id("read-text").click()
# time.sleep(2)
# driver.quit()

driver = webdriver.Chrome() # 현재파일과 동일한 경로일 경우 생략 가능

user_id = 'heidi_story'
user_pw = 'dlgPdls3'

staff_id_1 = '꼬꼬스탭ll햇님'
staff_id_2 = '체리스탭ll최리아'
staff_id_3 = '친절스탭ll와이포어'
staff_id_4 = '꼰대스탭ll이리엎'
staff_id_5 = '매니저ll잔향'

# 1. 판도라 카페 이동
driver.get('https://cafe.naver.com/lovelymate1004')

# 2. id 복사 붙여넣기
elem_id = driver.find_element(By.CSS_SELECTOR, '#id')
elem_id.click()
pyperclip.copy(user_id)
elem_id.send_keys(Keys.CONTROL, 'v')
time.sleep(1)

# 4. pw 복사 붙여넣기
elem_pw = driver.find_element(By.CSS_SELECTOR, 'input#pw.input_text')
elem_pw.click()
pyperclip.copy(user_pw)
elem_pw.send_keys(Keys.CONTROL, 'v')
time.sleep(1)

# 5. 로그인 버튼 클릭
elem_login = driver.find_element(By.CSS_SELECTOR, '.btn_text')
elem_login.click()

# 6. 가입인사 카테고리로 이동
go_welcome = driver.find_element(By.XPATH, "/html/body/div[2]/div/div[6]/div[1]/div[2]/div[2]/ul[8]/li[1]/a")
go_welcome.click()
time.sleep(0.5)

# 7. 새로운 가입인사 글 접속
element01 = driver.find_element(By.ID, "cafe_main")
driver.switch_to.frame(element01)
time.sleep(0.5)

# 8. 가입인사 답글여부 확인 // 두번째 리스트에 위치한 작성자 이름 스탭명과 비교

# 가장 최근(첫번째) 글 작성자 닉네임 출력
first_writer = driver.find_element(By.XPATH, "/html/body/div[1]/div/div[4]/table/tbody/tr[1]/td[2]/div/table/tbody/tr/td/a")
first_writer_nickname = first_writer.text

# 두번째 글 작성자 닉네임 출력
second_writer = driver.find_element(By.XPATH, "/html/body/div[1]/div/div[4]/table/tbody/tr[2]/td[2]/div/table/tbody/tr/td/a")
second_writer_nickname = second_writer.text

# 두번째 글 작성자 닉네임이 스탭진과 동일한 경우 => 답글 달려 있는 상태
if second_writer_nickname == staff_id_1 or staff_id_2 or staff_id_3 or staff_id_4 or staff_id_5 :
    print("새로 등록 된 가입인사가 없습니다.\n마지막 가입인사 게시판 이용자는 " + first_writer_nickname + "님 입니다")

    # 링크 추가
    # addLink = driver.find_element(By.XPATH, "/html/body/div[1]/div/div/section/div/div[2]/div[1]/div[2]/div/div[1]/div/header/div[1]/ul/li[8]/button")
    # addLink.click().send_key(Keys.TAB)


    # 현재 사용중인 탭 종료
    # browser.close()

    # 메인 탭으로 이동
    # browser.switch_to.window(browser.window_handles[0])
    

# 두번째 글 작성자 닉네임이 스탭진이 아닌 경우 => 답글 없는 상태
else :
    print(first_writer_nickname + "님의 가입인사가 새로 등록되어 있습니다.")

    # 새로 등록 된 가입인사 접속
    go_new_welcome_post = driver.find_element(By.XPATH, "/html/body/div[1]/div/div[4]/table/tbody/tr[1]/td[1]/div[3]/div/a")
    go_new_welcome_post.click()
    time.sleep(0.5)

    driver.switch_to.default_content()

    # 답글 클릭
    element02 = driver.find_element(By.ID, "cafe_main")
    driver.switch_to.frame(element02)
    time.sleep(0.5)
    makeReply = driver.find_element(By.XPATH, "/html/body/div/div/div/div[3]/div[1]/a[2]")
    makeReply.click()
    time.sleep(3)
    driver.switch_to.default_content()

    # 답글 생성 탭으로 이동
    driver.switch_to.window(driver.window_handles[1])
    
    # 내용 입력 칸 클릭
    elem_a = driver.find_element(By.XPATH,"/html/body/div[1]/div/div/section/div/div[2]/div[1]/div[2]/div/div[1]/div/div[1]/div[2]/section/article/div/div/div/div/div/p")

    # 내용 입력
    ActionChains(driver).send_keys("판도라 가입을 환영합니다.\n카페 활동을 위해서\n카페 등업 기준 및 강퇴/활정에 대한\n공지는 필수입니다.\n꼭 공지사항 보시고\n좋은 카페 활동 해주시길 바랍니다.\n\n\n필독 공지사항\nhttps://cafe.naver.com/lovelymate1004/785206\n\n15문답을 작성해주셔야 등업되세요~\nhttps://cafe.naver.com/lovelymate1004/206710\n\n문답작성시 주의사항(신입남녀 등업이 안되면 필수확인)\nhttps://cafe.naver.com/lovelymate1004/901329\n\n성별/연령 비공개 시 등업불가\nhttps://cafe.naver.com/lovelymate1004/1110647").perform()
    # ActionChains(driver).send_keys("판도라 가입을 환영합니다.\n카페 활동을 위해서\n카페 등업 기준 및 강퇴/활정에 대한\n공지는 필수입니다.\n꼭 공지사항 보시고\n좋은 카페 활동 해주시길 바랍니다.\n\n\n필독 공지사항\nhttps://cafe.naver.com/lovelymate1004/785206").perform()
    time.sleep(0.5)



# 97. 프레임 빠져나오기
# driver.switch_to.default_content()

# 98. html 정보 출력
# print(driver.page_source)

# 99. 브라우저 종료
# driver.close() # 현재 탭만 종료
# driver.quit() # 전체 브라우저 종료