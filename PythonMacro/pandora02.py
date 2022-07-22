from importlib.resources import contents
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium import webdriver
import pyperclip
import time

driver = webdriver.Chrome() # 현재파일과 동일한 경로일 경우 생략 가능

user_id = 'heidi_story'
user_pw = 'dlgPdls3'

staff_id_1 = '꼬꼬스탭ll햇님'
staff_id_2 = '체리스탭II최리아'
staff_id_3 = '친절스탭ll와이포어'
staff_id_4 = '꼰대스탭ll이리엎'
staff_id_5 = '매니저ll잔향'

# 1. 판도라 카페 이동
driver.get('https://cafe.naver.com/lovelymate1004')

# 2. 로그인 버튼 클릭
#elem = driver.find_element(By.CSS_SELECTOR, 'a.link_login')
#elem.click()

# 3. id 복사 붙여넣기
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
    print("새로 등록 된 가입인사가 없습니다.")
    
    # 새로 등록 된 가입인사 접속
    go_new_welcome_post = driver.find_element(By.XPATH, "/html/body/div[1]/div/div[4]/table/tbody/tr[1]/td[1]/div[3]/div/a")
    go_new_welcome_post.click()
    time.sleep(0.5)

    driver.switch_to.default_content()

    # 답글 클릭
    element02 = driver.find_element(By.ID, "cafe_main")
    driver.switch_to.frame(element02)
    time.sleep(0.5)
    go_reply_post = driver.find_element(By.XPATH, "/html/body/div/div/div/div[3]/div[1]/a[2]")
    go_reply_post.click()
    driver.switch_to.default_content()

    # 내용 입력 칸 클릭
    #content_fild = driver.find_element(By.XPATH, "/html/body/div[1]/div/div/section/div/div[2]/div[1]/div[2]/div/div[1]/div/div[1]/div[2]/section/article/div/div/div/div/div/p/span[2]")
    #content_fild.click()
    
    # 가입인사 입력
    on_html_bt = driver.find_element(By.ID, "elHtmlMode")
    on_html_bt.click()
    driver.find_element(By.ID, "elHtmlMode")


# 두번째 글 작성자 닉네임이 스탭진이 아닌 경우 => 답글 없는 상태
else :
    print(first_writer_nickname + "님의 가입인사가 새로 등록되어 있습니다.")
    # 신규 가입인사 접근
    #go_new_welcome_post = driver.find_element(By.XPATH, "/html/body/div[1]/div/div[4]/table/tbody/tr[1]/td[1]/div[3]/div/a")
    #go_new_welcome_post.click()






# 97. 프레임 빠져나오기
# driver.switch_to.default_content()

# 98. html 정보 출력
# print(driver.page_source)

# 99. 브라우저 종료
# driver.close() # 현재 탭만 종료
# driver.quit() # 전체 브라우저 종료